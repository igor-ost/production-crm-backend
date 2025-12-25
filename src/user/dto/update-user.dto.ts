import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto, UserRole } from './create-user.dto';
import { IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  login?: string | undefined;

  @IsNotEmpty()
  @IsEnum(UserRole, { message: 'Не допустимое значение роли.' })
  role?: UserRole | undefined;
}
