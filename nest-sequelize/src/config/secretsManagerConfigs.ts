import { SequelizeOptions } from 'sequelize-typescript';
import { SecretsManager } from 'aws-sdk';

import { ConfigsOptions, IAppConfigs } from './configs.interface';

// FIXME: Change prod, dev SecretsManager ARN
const secretsManagerArn =
  process.env.NODE_ENV === 'prod'
    ? 'prac-nestjs-secrets'
    : 'prac-nestjs-secrets';

async function checkSecretKey() {
  const secret = await getSecretKeyForAwsSecretManager(secretsManagerArn);
  return secret;
}

async function getSecretKeyForAwsSecretManager(secretKey: string) {
  const client = new SecretsManager({ region: 'ap-northeast-2' });
  const params = { SecretId: secretKey };
  const getSecretPromise = client.getSecretValue(params).promise();
  return getSecretPromise
    .then((data) => {
      const secret = JSON.parse(data.SecretString);
      return secret;
    })
    .catch((err) => {
      if (err.code === 'DecryptionFailureException') throw err;
      else if (err.code === 'InternalServiceErrorException') throw err;
      else if (err.code === 'InvalidParameterException') throw err;
      else if (err.code === 'InvalidRequestException') throw err;
      else if (err.code === 'ResourceNotFoundException') throw err;
    });
}

export class SecretsManagerConfigs {
  private static instance: SecretsManagerConfigs;
  private configName: string;
  public configs: ConfigsOptions;

  private constructor(configName) {
    this.configName = configName;
  }

  public static async getInstance() {
    if (!SecretsManagerConfigs.instance) {
      SecretsManagerConfigs.instance = new SecretsManagerConfigs(
        'default Configs',
      );
      const secretsManagerKeys = await checkSecretKey();
      SecretsManagerConfigs.instance.configs =
        mappingConfigsBySecretsManagerKeys(secretsManagerKeys);
    }
    return SecretsManagerConfigs.instance;
  }
}

function mappingConfigsBySecretsManagerKeys(
  secretsManagerKeys,
): ConfigsOptions {
  const databaseConfig: SequelizeOptions = {
    dialect:
      secretsManagerKeys.DATABASE_TYPE === 'postgres' ? 'postgres' : 'mysql',
    host: secretsManagerKeys.DATABASE_END_POINT || '127.0.0.1',
    port: parseInt(secretsManagerKeys.DATABASE_PORT) || 3306,
    username: secretsManagerKeys.DATABASE_USER || 'root',
    password: secretsManagerKeys.DATABASE_PASSWORD || '1234',
    database: secretsManagerKeys.DATABASE_DB || 'nest',
  };

  const appConfig: IAppConfigs = {
    port: parseInt(secretsManagerKeys.PORT) || 3000,
  };

  return { DatabaseConfig: databaseConfig, AppConfig: appConfig };
}
