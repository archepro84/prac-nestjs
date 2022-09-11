import { Post } from './posts.entity';

export const PostsProviders = [
  {
    provide: 'POSTS_ENTITY',
    useValue: Post,
  },
];
