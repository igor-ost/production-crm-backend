import { IsNumber, IsString } from 'class-validator';

export class CreateVelcroDto {
  @IsString()
  name: string;

  @IsString()
  unit: string;

  @IsNumber()
  price: number;

  @IsNumber()
  qty: number;
}
