import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateButtonsDto } from './create-buttons.dto';

export class UpdateButtonsDto extends PartialType(CreateButtonsDto) {
  @IsString()
  color?: string | undefined;

  @IsString()
  type?: string | undefined;

  @IsString()
  unit?: string | undefined;

}
