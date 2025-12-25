import { PartialType } from '@nestjs/mapped-types';
import { CreateTemplateItemDto } from './create-template_item.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateTemplateItemDto extends PartialType(CreateTemplateItemDto) {
  @IsString()
  template_id: string | undefined;

  @IsString()
  material_id: string | undefined;

  @IsNumber()
  qty: number | undefined;
}
