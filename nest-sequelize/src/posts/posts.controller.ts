import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { AddPostDto } from './posts.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('/')
  addPost(@Body() addPostDto: AddPostDto) {
    return this.postsService.addPost(addPostDto);
  }

  @Get('/')
  findAll() {
    return this.postsService.findAll();
  }
}
