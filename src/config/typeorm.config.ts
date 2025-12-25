import { ConfigService } from '@nestjs/config';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';

export async function getTypeORMConfig(
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> {
  return {
    type: 'mysql',
    host: configService.getOrThrow('MYSQL_HOST'),
    port: configService.getOrThrow('MYSQL_PORT'),
    username: configService.getOrThrow('MYSQL_USER'),
    password: configService.getOrThrow('MYSQL_PASS'),
    database: configService.getOrThrow('MYSQL_DB'),
    synchronize: true,
    autoLoadEntities: true,
  };
}
