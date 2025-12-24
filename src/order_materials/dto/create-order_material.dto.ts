import { IsNumber, IsString } from "class-validator";
import { MaterialType } from "src/template_items/dto/create-template_item.dto";

export class CreateOrderMaterialDto {
    @IsString()
    order_id: string;
    @IsString()
    material_id: string;
    @IsString()
    material_type: MaterialType;
    @IsNumber()
    qty:number;
}
