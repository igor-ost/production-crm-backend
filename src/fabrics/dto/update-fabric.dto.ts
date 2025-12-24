import { PartialType } from '@nestjs/mapped-types';
import { CreateFabricDto } from './create-fabric.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateFabricDto extends PartialType(CreateFabricDto) {
    @IsString()
    name:string | undefined;

    @IsString()
    color:string | undefined;

    @IsString()
    type:string | undefined;

    @IsString()
    unit: string | undefined;
    
    @IsNumber()
    price: number | undefined
    
    @IsNumber()
    qty: number | undefined
}
