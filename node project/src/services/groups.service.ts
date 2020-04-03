import { uuid } from "uuidv4";
import { ServiceResponse, Group } from "../types";
import { getAllGroups, findGroupById, updateGroup, findGroupByName, createGroup, hardDeleteGroup } from "../data-access/group.data-acces";
import { addUsersToGroup, deleteGroupData, getAllUsersGroups } from "../data-access/user-group.data-acces";
import { Sequelize } from 'sequelize';
import { findUsersByIds } from "../data-access/user.data-acces";
import { config } from 'dotenv';

// set up env configuration 
config();

const sequelize = new Sequelize(process.env.POSTGRE_SQL_DB_URL, { logging: false });

export const getGroups = async () => {
  const groups = await getAllGroups();
  return { status: 200, message: groups };
};

export const getUsersGroups = async () => {
  const usersGroups = await getAllUsersGroups();
  return { status: 200, message: usersGroups };
};


export const getGroup = async (id: string): Promise<ServiceResponse> => {
  const foundGroup = await findGroupById(id);

  if (!foundGroup) {
    return {
      status: 400,
      message: 'Group does not exist!'
    };
  }

  return {
    status: 200,
    message: foundGroup
  };
};

export const editGroup = async (id: string, group: Group): Promise<ServiceResponse> => {
  const foundGroup = await findGroupById(id);

  if (!foundGroup) {
    return {
      status: 400,
      message: 'Group does not exist!'
    };
  }

  const result = await updateGroup(id, group);

  return {
    status: 200,
    message: result[1][0]
  };
};

export const addGroup = async (group: Group): Promise<ServiceResponse> => {

  const usersWithLogin = await findGroupByName(group.name);
  if (usersWithLogin) {
    return {
      status: 400,
      message: 'Group with the name already exists!'
    };
  }

  const newGroup = {
    id: uuid(),
    ...group
  };

  const createdGroup = await createGroup(newGroup);

  return {
    status: 200,
    message: createdGroup
  };
};

export const mapUsersToGroup = async (groupId: string, userIds: string[]): Promise<ServiceResponse> => {

  const foundGroup = await findGroupById(groupId);

  if (!foundGroup) {
    return {
      status: 400,
      message: 'Group does not exist!'
    };
  }

  const foundUsers = await findUsersByIds(userIds);

  if (!foundUsers || foundUsers.length === 0) {
    return {
      status: 400,
      message: 'User(s) do not exist!'
    };
  }

  const foundUserIds = foundUsers.map(user => user.id);

  const groupToUserMappings = await addUsersToGroup(groupId, foundUserIds);

  return {
    status: 200,
    message: groupToUserMappings
  };
};

export const deleteGroup = async (id: string): Promise<ServiceResponse> => {

  const foundGroup = await findGroupById(id);

  if (!foundGroup) {
    return {
      status: 400,
      message: 'Group you are trying to delete does not exist'
    };
  }

  const transaction = await sequelize.transaction();
  try {
    await hardDeleteGroup(id, transaction);
    await deleteGroupData(id, transaction);
    await transaction.commit();

    return { status: 200, message: 'Group deleted successfully' };
  } catch (ex) {
    return { status: 500, message: ex };
  }
};
