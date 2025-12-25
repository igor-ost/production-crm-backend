import { PartialType } from '@nestjs/mapped-types';
import { CreateTemplateDto } from './create-template.dto';
import { IsString } from 'class-validator';

export class UpdateTemplateDto extends PartialType(CreateTemplateDto) {
  @IsString()
  name: string | undefined;

  @IsString()
  description: string | undefined;
}
