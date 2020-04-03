import { Sequelize, DataTypes, Model } from 'sequelize';
import { config } from 'dotenv';

// set up env configuration 
config();

const sequelize = new Sequelize(process.env.POSTGRE_SQL_DB_URL, { logging: false });

export class UserGroupModel extends Model { }

UserGroupModel.init(
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        groupId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'UserGroup',
        tableName: 'UserGroups'
    }
);
