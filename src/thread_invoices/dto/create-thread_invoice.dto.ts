
import { IsString, IsNumber, IsUUID } from "class-validator";

export class CreateThreadInvoiceDto {
    @IsUUID()
    material_id: string;
    
    @IsNumber()
    qty: number;

    @IsString()
    dateArrived: string

    @IsNumber()
    price:number
}
