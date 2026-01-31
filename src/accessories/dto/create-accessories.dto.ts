import { IsNumber, IsString } from 'class-validator';

export class CreateAccessoriesDto {
  @IsString()
  name: string;

  @IsString()
  unit: string;

  @IsNumber()
  price: number;
}
