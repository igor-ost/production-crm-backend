import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { IsDate, IsInt, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @IsString()
  size: string | undefined;

  @IsString()
  status: string | undefined;

  @IsNumber()
  @Min(0)
  sewing_price: number | undefined;

  @IsNumber()
  @Min(0)
  cutting_price: number | undefined;

  @IsInt()
  @Min(1)
  quantity: number | undefined;

  @IsInt()
  @Min(0)
  buttons: number | undefined;

  @IsOptional()
  @IsString()
  notes?: string | undefined;

  @IsOptional()
  @IsDate()
  deatline?: Date  | undefined;
}
