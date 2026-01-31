
import { IsNumber, IsString, IsUUID } from "class-validator";

export class CreateAccessoriesInvoiceDto {
    @IsUUID()
    material_id: string;
        
    @IsNumber()
    qty: number;
    
    @IsString()
    dateArrived: string
}
