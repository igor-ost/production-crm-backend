import { PartialType } from '@nestjs/mapped-types';
import { CreateThreadDto } from './create-thread.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateThreadDto extends PartialType(CreateThreadDto) {
  @IsString()
  color: string | undefined;

  @IsString()
  type: string | undefined;

  @IsString()
  unit: string | undefined;

  @IsNumber()
  price: number | undefined;

  @IsNumber()
  qty: number | undefined;
}
