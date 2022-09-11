import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { DatabaseModule } from '../database/database.module';
import { PostsProviders } from './posts.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PostsController],
  providers: [PostsService, ...PostsProviders],
})
export class PostsModule {}
