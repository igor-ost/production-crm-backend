import { IsString } from 'class-validator';

export class CreateFabricDto {
  @IsString()
  name: string;

  @IsString()
  color: string;

  @IsString()
  unit: string;


}
