import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from './user.entity';
import * as config from 'config';

const jwtConfig = config.get('jwt');

@Injectable() // 이 jwt를 다른 곳에서도 주입해서 사용할 수 있도록 Intectable 데코레이터를 사용한다.
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {
    super({
      secretOrKey: process.env.JWT_SECRET || jwtConfig.secret, // 토큰이 유효한지 체크하기위한 SecretKey
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // 토큰을 BearerToekn으로 가져온다.
    });
  }

  async validate(payload) {
    const { username } = payload;
    const user: User = await this.userRepository.findOne({ username });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
