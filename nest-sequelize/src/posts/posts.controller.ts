import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { AddPostDto } from './posts.dto';
import { Post as PostEntity } from './posts.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('/')
  addPost(@Body() addPostDto: AddPostDto): Promise<PostEntity> {
    return this.postsService.addPost(addPostDto);
  }

  @Get('/')
  findAll(): Promise<PostEntity[]> {
    return this.postsService.findAll();
  }
}
