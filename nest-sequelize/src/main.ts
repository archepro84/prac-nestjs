import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from './config/configs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = appConfig.port;

  await app.listen(port);
}

bootstrap();
