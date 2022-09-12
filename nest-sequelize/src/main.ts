import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SecretsManagerConfigs } from './config/secretsManagerConfigs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configsInstance = await SecretsManagerConfigs.getInstance();
  const { port } = configsInstance.configs.AppConfig;

  await app.listen(port);
}

bootstrap();
