import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import bcrypt from 'node_modules/bcryptjs';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(login: string, password: string) {
    const user = await this.userService.findByLogin(login);
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch, user);
    if (!isMatch) {
      throw new UnauthorizedException('Неправильный логин/пароль');
    }
    const payload = { sub: user.id, username: user.login };
    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}
