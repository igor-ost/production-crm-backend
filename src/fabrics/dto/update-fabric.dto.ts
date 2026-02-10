import { PartialType } from '@nestjs/mapped-types';
import { CreateFabricDto } from './create-fabric.dto';
import { IsString } from 'class-validator';

export class UpdateFabricDto extends PartialType(CreateFabricDto) {
  @IsString()
  name: string | undefined;

  @IsString()
  color: string | undefined;

  @IsString()
  unit: string | undefined;

}
