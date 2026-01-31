
import { IsString, IsNumber, IsUUID } from "class-validator";

export class CreateFabricInvoiceDto {
    @IsUUID()
    id: string;
    
    @IsNumber()
    qty: number;

    @IsString()
    dateArrived: string
}
