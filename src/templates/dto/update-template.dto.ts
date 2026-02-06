import { PartialType } from '@nestjs/mapped-types';
import { CreateTemplateDto } from './create-template.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateTemplateDto extends PartialType(CreateTemplateDto) {
  @IsString()
  name: string | undefined;

  @IsString()
  description: string | undefined;

  @IsNumber()
  cuttingPrice: number | undefined;
  
  @IsNumber()
  sewingPrice: number | undefined;
  
  @IsNumber()
  buttonsPrice: number | undefined;
}
