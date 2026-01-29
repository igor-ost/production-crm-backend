import {
  IsUUID,
  IsString,
  IsNumber,
  IsOptional,
  IsInt,
  Min,
  IsDate,
} from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  customer_id: string;

  @IsUUID()
  template_id: string;

  @IsString()
  size: string;

  @IsString()
  status: string;

  @IsNumber()
  @Min(0)
  sewing_price: number;

  @IsNumber()
  @Min(0)
  cutting_price: number;

  @IsInt()
  @Min(9)
  quantity: number;

  @IsInt()
  @Min(0)
  buttons?: number;

  @IsString()
  deadline?: string

  @IsOptional()
  @IsString()
  notes?: string;
}
