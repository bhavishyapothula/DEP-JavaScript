import { Sequelize, DataTypes, Model } from 'sequelize';
import { config } from 'dotenv';

// set up env configuration 
config();

const sequelize = new Sequelize(process.env.POSTGRE_SQL_DB_URL, { logging: false });

export class GroupModel extends Model { }

GroupModel.init(
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        permissions: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        }
    },
    {
        sequelize,
        modelName: 'Group',
        tableName: 'Groups'
    }
);
