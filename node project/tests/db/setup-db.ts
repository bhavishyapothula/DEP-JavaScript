import { uuid } from 'uuidv4';
import { UserModel } from "../../src/home-task-03-04-05/models/user.model";
import { UserGroupModel } from '../../src/home-task-03-04-05/models/user-group.model';
import { GroupModel } from '../../src/home-task-03-04-05/models/group.model';

export const seedData = {
    user : { id: uuid(), login: 'User1', password: 'Password1', age: 30, isDeleted: false },
    groups: [
        { id: uuid(), name: 'Group1', permissions: ['READ'] },
        { id: uuid(), name: 'Group2', permissions: ['WRITE'] },
        { id: uuid(), name: 'Group3', permissions: ['READ', 'WRITE'] },
        { id: uuid(), name: 'Group4', permissions: ['READ', 'WRITE', 'UPLOAD_FILES'] }
    ]
};

export const setupDBForTests = async (initialData: { user: any; groups: any; }) => {
    await UserModel.sync({ force: true });
    await GroupModel.sync({ force: true });
    await UserGroupModel.sync({ force: true });

    await UserModel.create(initialData.user);
    await GroupModel.bulkCreate(initialData.groups);
};
