import { Sequelize } from 'sequelize-typescript';
import { Post } from '../posts/posts.entity';

export const DatabaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '1234',
        database: 'nest_sequelize',
      });
      sequelize.addModels([Post]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
