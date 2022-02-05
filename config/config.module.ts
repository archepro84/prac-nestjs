import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import configuration from './configuration';
import { AppConfigService } from './config.service';

const configModuleOptions = { isGlobal: true, load: [configuration] };

@Module({
  imports: [ConfigModule.forRoot(configModuleOptions)],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
