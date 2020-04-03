import { uuid } from "uuidv4";
import {
  getAllUsers, findUserByLogin, createUser, findUserById, updateUser,
  findUsersMatchingLogin, softDeleteUser
} from "../data-access/user.data-acces";
import { ServiceResponse, User } from "../types";
import { deleteUserData } from "../data-access/user-group.data-acces";
import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

// set up env configuration 
config();

const sequelize = new Sequelize(process.env.POSTGRE_SQL_DB_URL, { logging: false });

export const getUsers = async () => {
  const users = await getAllUsers();
  return { status: 200, message: users };
};

export const getUser = async (id: string): Promise<ServiceResponse> => {
  const foundUser = await findUserById(id);

  if (!foundUser) {
    return {
      status: 400,
      message: 'User does not exist!'
    };
  }

  return {
    status: 200,
    message: foundUser
  };
};

export const editUser = async (id: string, user: User): Promise<ServiceResponse> => {
  const foundUser = await findUserById(id);

  if (!foundUser) {
    return {
      status: 400,
      message: 'User does not exist!'
    };
  }

  const result = await updateUser(id, user);

  return {
    status: 200,
    message: result[1][0]
  };
};

export const addUser = async (user: User): Promise<ServiceResponse> => {

  const usersWithLogin = await findUserByLogin(user.login);
  if (usersWithLogin) {
    return {
      status: 400,
      message: 'User with the login already exists!'
    };
  }

  const newUser = {
    id: uuid(),
    ...user,
    isDeleted: false
  };

  const createdUser = await createUser(newUser);

  return {
    status: 200,
    message: createdUser
  };
};

export const deleteUser = async (id: string): Promise<ServiceResponse> => {

  const foundUser = await findUserById(id);

  if (!foundUser) {
    return {
      status: 400,
      message: 'User you are trying to delete does not exist'
    };
  }


  if (foundUser.isDeleted) {
    return {
      status: 400,
      message: 'User you are trying to delete is already deleted'
    };
  }

  const transaction = await sequelize.transaction();
  try {
    await softDeleteUser(id, transaction);
    await deleteUserData(id, transaction);
    await transaction.commit();

    return { status: 200, message: 'User deleted successfully' };
  } catch (ex) {
    return { status: 500, message: ex };
  }
};

export const searchUsers = async (key: string, limit: number): Promise<ServiceResponse> => {

  const matchingUsers = await findUsersMatchingLogin(key, limit);

  return {
    status: 200,
    message: matchingUsers
  };
};
