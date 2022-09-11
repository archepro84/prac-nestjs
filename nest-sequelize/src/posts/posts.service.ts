import { Inject, Injectable } from '@nestjs/common';
import { AddPostDto } from './posts.dto';
import { Post } from './posts.entity';
// import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  // constructor(private readonly postsRepository: PostsRepository) {}
  constructor(
    @Inject('POSTS_ENTITY')
    private postsRepository: typeof Post,
  ) {}

  async addPost(addPostDto: AddPostDto) {
    // const postLog = await this.postsRepository.create(addPostDto);
    // return postLog;
  }

  async findAll() {
    return await this.postsRepository.findAll();
  }
}
