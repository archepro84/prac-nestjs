import { Sequelize } from 'sequelize-typescript';
import { Post } from '../posts/posts.entity';
import { SecretsManagerConfigs } from '../config/secretsManagerConfigs';

export const DatabaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const configsInstance = await SecretsManagerConfigs.getInstance();
      const databaseConfig = configsInstance.configs.DatabaseConfig;

      const sequelize = new Sequelize(databaseConfig);
      sequelize.addModels([Post]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
