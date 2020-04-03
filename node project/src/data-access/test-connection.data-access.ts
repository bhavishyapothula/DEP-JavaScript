import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

// set up env configuration 
config();

const sequelize = new Sequelize(process.env.POSTGRE_SQL_DB_URL, { logging: false });

export const testConnection = async () => {
    console.log('Starting connection test.');
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
