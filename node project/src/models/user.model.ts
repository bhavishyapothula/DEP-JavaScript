import { Sequelize, DataTypes, Model } from 'sequelize';
import { config } from 'dotenv';

// set up env configuration 
config();

const sequelize = new Sequelize(process.env.POSTGRE_SQL_DB_URL, { logging: false });

export class UserModel extends Model { }

UserModel.init(
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'Users'
    }
);
