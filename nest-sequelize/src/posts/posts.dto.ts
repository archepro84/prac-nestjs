import { IsString } from 'class-validator';

export class AddPostDto {
  @IsString()
  nickname: string;

  @IsString()
  password: string;

  @IsString()
  title: string;

  @IsString()
  content: string;
}
