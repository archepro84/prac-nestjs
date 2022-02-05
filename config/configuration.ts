import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';

const configMap = {
  NODE_ENV: process.env.NODE_ENV,
  SERVER_PORT: process.env.SERVER_PORT,

  DB_TYPE: process.env.DB_TYPE,
  DB_PORT: process.env.DB_PORT,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_END_POINT: process.env.DB_END_POINT,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_SYNCHRONIZE: process.env.DB_SYNCHRONIZE,

  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES: process.env.JWT_EXPIRES,
};

export default registerAs('app', () => {
  const level: string = process.env.NODE_ENV;
  if (level === 'dev') {
    return dotenv.config({ path: '.env.dev' }).parsed;
  }
  return configMap;
});
