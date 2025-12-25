import { IsNumber, IsString } from 'class-validator';

export class CreateZipperDto {
  @IsString()
  color: string;

  @IsString()
  type: string;

  @IsString()
  unit: string;

  @IsNumber()
  price: number;

  @IsNumber()
  qty: number;
}
