
import { IsString, IsNumber, IsUUID } from "class-validator";

export class CreateFabricInvoiceDto {
    @IsUUID()
    material_id: string;
    
    @IsNumber()
    qty: number;

    @IsString()
    dateArrived: string

    @IsNumber()
    price:number
}
