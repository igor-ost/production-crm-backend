import { IsNumber, IsString } from 'class-validator';
export enum MaterialType {
  ACCESSORIES = 'accessories',
  BUTTONS = 'buttons',
  ZIPPERS = 'zippers',
  FABRICS = 'fabrics',
  VELCRO = 'velcro',
  THREADS = 'threads',
}
export class CreateTemplateItemDto {
  @IsString()
  template_id: string;
  @IsString()
  material_id: string;
  @IsString()
  material_type: MaterialType;
  @IsNumber()
  qty: number;
}
