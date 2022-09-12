import { SequelizeOptions } from 'sequelize-typescript';
import * as dotenv from 'dotenv';
import * as path from 'path';

const filePath = process.env.NODE_ENV === 'prod' ? '.prod.env' : '.dev.env';
dotenv.config({ path: path.resolve(`${__dirname}/env/${filePath}`) });

export const databaseConfig: SequelizeOptions = {
  dialect: process.env.DATABASE_TYPE === 'postgres' ? 'postgres' : 'mysql',
  host: process.env.DATABASE_END_POINT || '127.0.0.1',
  port: parseInt(process.env.DATABASE_PORT) || 3306,
  username: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASSWORD || '1234',
  database: process.env.DATABASE_DB || 'nest',
};

export const appConfig = {
  port: parseInt(process.env.PORT) || 3000,
};
