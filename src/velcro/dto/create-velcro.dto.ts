import { IsString } from 'class-validator';

export class CreateVelcroDto {
  @IsString()
  name: string;

  @IsString()
  unit: string;

}
