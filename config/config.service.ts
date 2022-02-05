import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {
    console.log(this.configService);
  }

  get(key: string): string {
    return this.configService.get(`app.${key}`);
  }
}
