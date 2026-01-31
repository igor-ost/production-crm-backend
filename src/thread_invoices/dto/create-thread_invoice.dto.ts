
import { IsString, IsNumber, IsUUID } from "class-validator";

export class CreateThreadInvoiceDto {
    @IsUUID()
    id: string;
    
    @IsNumber()
    qty: number;

    @IsString()
    dateArrived: string
}
