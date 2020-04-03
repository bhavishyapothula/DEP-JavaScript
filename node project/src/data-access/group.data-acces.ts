import { uuid } from 'uuidv4';
import { Group } from '../types';
import { GroupModel } from '../models/group.model';

export const initGroupsData = async (loadData: boolean) => {
    // when data load is not required, Users tables is ensured to be present with correct schema
    if (!loadData) {
        GroupModel.sync();
        return;
    }
    await GroupModel.sync({ force: true });
    await GroupModel.bulkCreate([
        { id: uuid(), name: 'Group 1', permissions: ['READ'] },
        { id: uuid(), name: 'Group 2', permissions: ['WRITE'] },
        { id: uuid(), name: 'Group 3', permissions: ['READ', 'WRITE'] },
        { id: uuid(), name: 'Group 4', permissions: ['READ', 'WRITE', 'UPLOAD_FILES'] }
    ]);
}

export const getAllGroups = async (): Promise<Group[]> => {
    return await GroupModel.findAll();
};

export const findGroupById = async (id: string): Promise<Group> => {
    return await GroupModel.findByPk(id);
};

export const findGroupByName = async (name: string): Promise<Group> => {
    return await GroupModel.findOne({
        where: {
            name
        }
    });
};

export const createGroup = async (groupInfo: Group): Promise<Group> => {
    return await GroupModel.create(
        groupInfo
    );
};

export const updateGroup = async (id: string, group: Group): Promise<[string, Group[]]> => {
    return await GroupModel.update(group, { returning: true, where: { id } });
};

export const hardDeleteGroup = async (id: string, transaction = undefined): Promise<number> => {
    return await GroupModel.destroy({ where: { id }, transaction });
};
