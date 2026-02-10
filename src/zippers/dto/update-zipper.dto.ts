import { PartialType } from '@nestjs/mapped-types';
import { CreateZipperDto } from './create-zipper.dto';
import { IsString } from 'class-validator';

export class UpdateZipperDto extends PartialType(CreateZipperDto) {
  @IsString()
  color?: string | undefined;

  @IsString()
  type?: string | undefined;

  @IsString()
  unit?: string | undefined;


}
