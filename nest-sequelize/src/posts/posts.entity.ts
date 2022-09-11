import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Post extends Model {
  @Column
  nickname: string;

  @Column
  password: string;

  @Column
  title: string;

  @Column
  content: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
