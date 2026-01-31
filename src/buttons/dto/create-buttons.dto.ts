import { IsNumber, IsString } from 'class-validator';

export class CreateButtonsDto {
  @IsString()
  color: string;

  @IsString()
  type: string;

  @IsString()
  unit: string;

  @IsNumber()
  price: number;

}
