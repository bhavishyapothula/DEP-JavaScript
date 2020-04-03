import { uuid } from 'uuidv4';
import { User, ServiceResponse } from '../types';
import { Op } from 'sequelize';
import { UserModel } from '../models/user.model';

export const initUsersData = async (loadData: boolean) => {
    // when data load is not required, Users tables is ensured to be present with correct schema
    if (!loadData) {
        UserModel.sync();
        return;
    }
    await UserModel.sync({ force: true });
    await UserModel.bulkCreate([
        { id: uuid(), login: 'User1', firstName: 'One', lastName: 'User', password: 'Password 1', age: 30, isDeleted: false },
        { id: uuid(), login: 'User2', firstName: 'Two', lastName: 'User', password: 'Password 2', age: 30, isDeleted: true },
        // { id: uuid(), login: 'User3', firstName: 'Three', lastName: 'User', password: 'Password 3', age: 30, isDeleted: false },
        // { id: uuid(), login: 'User4', firstName: 'Four', lastName: 'User', password: 'Password 4', age: 30, isDeleted: false },
        // { id: uuid(), login: 'User5', firstName: 'Five', lastName: 'User', password: 'Password 5', age: 30, isDeleted: false },
        // { id: uuid(), login: 'User6', firstName: 'Six', lastName: 'User', password: 'Password 6', age: 30, isDeleted: true },
        // { id: uuid(), login: 'User7', firstName: 'Seven', lastName: 'User', password: 'Password 7', age: 30, isDeleted: true },
        // { id: uuid(), login: 'User8', firstName: 'Eight', lastName: 'User', password: 'Password 8', age: 30, isDeleted: false },
        // { id: uuid(), login: 'User9', firstName: 'Nine', lastName: 'User', password: 'Password 9', age: 30, isDeleted: true },
        // { id: uuid(), login: 'User10', firstName: 'Ten', lastName: 'User', password: 'Password 10', age: 30, isDeleted: false },
    ]);
}

export const getAllUsers = async (): Promise<User[]> => {
    return await UserModel.findAll();
};

export const findUserByLogin = async (login: string): Promise<User> => {
    return await UserModel.findOne({
        where: {
            login
        }
    });
};

export const createUser = async (userInfo: User): Promise<User> => {
    return await UserModel.create(
        userInfo
    );
};

export const findUserById = async (id: string): Promise<User> => {
    return await UserModel.findByPk(id);
};

export const findUsersByIds = async (ids: string[]): Promise<Array<User>> => {
    return await UserModel.findAll({
        where: {
            id: {
                [Op.in]: ids
            }
        }
    });
};

export const updateUser = async (id: string, user: User): Promise<[number, User[]]> => {
    return await UserModel.update(user, { returning: true, where: { id } });
};

export const softDeleteUser = async (id: string, transaction = undefined): Promise<[number, User[]]> => {
    return await UserModel.update({ isDeleted: true }, { returning: true, where: { id }, transaction });
};

export const findUsersMatchingLogin = async (key: string, limit: number): Promise<ServiceResponse> => {
    return await UserModel.findAll({
        where: {
            login: {
                [Op.iLike]: `%${key}%`
            }
        },
        limit,
        order: [['login', 'ASC']]
    });
};
