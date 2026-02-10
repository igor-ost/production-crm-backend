import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateAccessoriesDto } from './create-accessories.dto';

export class UpdateAccessoriesDto extends PartialType(CreateAccessoriesDto) {
  @IsString()
  name?: string | undefined;

  @IsString()
  unit?: string | undefined;

}
