import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, Logger } from '@nestjs/common';
import * as config from 'config';

async function bootstrap() {
  const nestApp: INestApplication = await NestFactory.create(AppModule);

  const serverConfig = config.get('server');
  const port = serverConfig.port;

  await nestApp.listen(port);
  Logger.log(`Application is running on: ${await nestApp.getUrl()}`);
}

bootstrap();
