import { PartialType } from '@nestjs/mapped-types';
import { CreateVelcroDto } from './create-velcro.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateVelcroDto extends PartialType(CreateVelcroDto) {
    @IsString()
    name:string | undefined;

    @IsString()
    unit: string | undefined
    
    @IsNumber()
    price: number | undefined
    
    @IsNumber()
    qty: number | undefined
}
