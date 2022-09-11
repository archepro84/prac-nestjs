import { Injectable } from '@nestjs/common';
import { AddPostDto } from './posts.dto';
import { PostsRepository } from './posts.repository';
import { Post } from './posts.entity';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  async addPost(addPostDto: AddPostDto): Promise<Post> {
    const postLog = await this.postsRepository.addPost(addPostDto);
    return postLog;
  }

  async findAll(): Promise<Post[]> {
    return await this.postsRepository.findAll();
  }
}
