import { SequelizeOptions } from 'sequelize-typescript';

export interface IAppConfigs {
  port: number;
}

export interface ConfigsOptions {
  AppConfig: IAppConfigs;
  DatabaseConfig: SequelizeOptions;
}
