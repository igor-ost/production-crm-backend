import { PartialType } from '@nestjs/mapped-types';
import { CreateThreadDto } from './create-thread.dto';
import { IsString } from 'class-validator';

export class UpdateThreadDto extends PartialType(CreateThreadDto) {
  @IsString()
  color: string | undefined;

  @IsString()
  type: string | undefined;

  @IsString()
  unit: string | undefined;

}
