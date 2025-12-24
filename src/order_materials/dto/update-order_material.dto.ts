import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderMaterialDto } from './create-order_material.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateOrderMaterialDto extends PartialType(CreateOrderMaterialDto) {    
    @IsNumber()
    qty:number | undefined;
}
