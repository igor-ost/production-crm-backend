import { IsNumber, IsString } from 'class-validator';

export class CreateTemplateDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  cuttingPrice: number;

  @IsNumber()
  sewingPrice: number;

  @IsNumber()
  buttonsPrice: number;
}
