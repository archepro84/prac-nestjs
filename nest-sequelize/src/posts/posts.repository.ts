import { Inject, Injectable } from '@nestjs/common';
import { Post } from './posts.entity';
import { AddPostDto } from './posts.dto';

@Injectable()
export class PostsRepository {
  constructor(
    @Inject('POSTS_ENTITY')
    private postsModel: typeof Post,
  ) {}

  async addPost(addPostDto: AddPostDto): Promise<Post> {
    const postLog = await this.postsModel.create({ ...addPostDto });
    return postLog;
  }

  async findAll(): Promise<Post[]> {
    return await this.postsModel.findAll();
  }
}
