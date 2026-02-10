import { IsString } from 'class-validator';

export class CreateThreadDto {
  @IsString()
  color: string;

  @IsString()
  type: string;

  @IsString()
  unit: string;


}
