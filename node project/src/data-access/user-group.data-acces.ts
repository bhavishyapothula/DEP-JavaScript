import { UserGroupModel } from '../models/user-group.model';
import UserGroup from '../types/user-group.type';
import { Op } from 'sequelize';
import { uuid } from 'uuidv4';

export const initUsersGroupData = async () => {
    await UserGroupModel.sync({force: true});
}

export const getAllUsersGroups= async (): Promise<UserGroup[]> => {
    return await UserGroupModel.findAll();
}

export const addUsersToGroup = async (groupId: string, userIds: string[]): Promise<UserGroup[]> => {

    const existingGroupUsers = await UserGroupModel.findAll({
        where: {
            groupId,
            userId: {
                [Op.in]: userIds
            }
        }
    });

    const existingGroupUserMappings = {};
    if (existingGroupUsers.length > 0) {
        existingGroupUsers.reduce((existingGroupUserMappings, existingGroupUser) => {
            if (!existingGroupUserMappings[existingGroupUser.userId]) {
                existingGroupUserMappings[existingGroupUser.userId] = existingGroupUser;
            }
            return existingGroupUserMappings;
        }, {});
    }

    const userMappingsToBeCreated = userIds.filter((userId) => !existingGroupUserMappings[userId]);

    if (userMappingsToBeCreated.length === 0) {
        return;
    }

    // here as we are creating in bulk transaction is not required
    // transaction is used at delete user and group entities where usergroup data also need to be deleted

    return await UserGroupModel.bulkCreate(
        userMappingsToBeCreated.map((userId) => {
            return { groupId, userId, id: uuid() };
        })
    );
};

// deletes all linkings of the user with any groups
export const deleteUserData = async (userId: string, transaction = undefined): Promise<number> => {
    return await UserGroupModel.destroy({ where: { userId }, transaction });
};

// deletes all linkings of the user with any groups
export const deleteGroupData = async (groupId: string, transaction): Promise<number> => {
    return await UserGroupModel.destroy({ where: { groupId }, transaction });
};
