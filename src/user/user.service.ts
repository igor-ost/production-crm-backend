import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto, UserRole } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import bcrypt from 'node_modules/bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async createAdmin() {
    const check = await this.userRepository.findOne({
      where: {
        login: 'igostape',
      },
    });

    if (check) {
      throw new ConflictException('Base settings already completed');
    }

    const admin_account = {
      login: 'igostape',
      password: await bcrypt.hash('H93wp21kls@', 10),
      role: 'admin' as UserRole,
    };
    const admin_user = await this.userRepository.create(admin_account);
    return await this.userRepository.save(admin_user);
  }

  async create(createUserDto: CreateUserDto) {
    const check = await this.userRepository.findOne({
      where: {
        login: createUserDto.login,
      },
    });

    if (check) {
      throw new ConflictException(
        'Пользователь под данным логинов уже существует',
      );
    }
    const new_user: CreateUserDto = {
      login: createUserDto.login,
      password: await bcrypt.hash(createUserDto.password, 10),
      role: createUserDto.role,
    };
    const user = await this.userRepository.create(new_user);
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find({
      order: {
        createdAt: 'ASC',
      },
    });
  }

  async findByLogin(login: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        login: login,
      },
      select: {
        login: true,
        password: true,
        id: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!user) {
      throw new NotFoundException('Неправильный логин/пароль');
    }
    return user;
  }

  async findOne(id: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const user = await this.findOne(id);
    Object.assign(user, updateUserDto);
    return await this.userRepository.save(user);
  }

  async remove(id: string): Promise<{ status: boolean }> {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
    return { status: true };
  }
}
