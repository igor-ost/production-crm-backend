import { PartialType } from '@nestjs/mapped-types';
import { CreateVelcroDto } from './create-velcro.dto';
import { IsString } from 'class-validator';

export class UpdateVelcroDto extends PartialType(CreateVelcroDto) {
  @IsString()
  name: string | undefined;

  @IsString()
  unit: string | undefined;

}
