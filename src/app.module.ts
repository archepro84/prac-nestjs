import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModuleOptions } from '@nestjs/config';
import { typeORMConfig } from './config/typeorm.config';
import { BoardsModule } from './modules/boards/boards.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './modules/users/users.controller';
import { UsersModule } from './modules/users/users.module';

// const configModuleOption: ConfigModuleOptions = {
//   envFilePath: [
//     `${__dirname}/config/env/.${
//       process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
//     }.env`,
//   ],
//   load: [emailConfig],
//   isGlobal: true,
// };

@Module({
  imports: [
    // ConfigModule.forRoot(configModuleOption),
    TypeOrmModule.forRoot(typeORMConfig),
    BoardsModule,
    AuthModule,
    UsersModule,
    // ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
