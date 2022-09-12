import { Sequelize } from 'sequelize-typescript';
import { Post } from '../posts/posts.entity';
import { databaseConfig } from '../config/configs';

export const DatabaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(databaseConfig);
      sequelize.addModels([Post]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
