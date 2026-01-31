import { IsDate, IsNumber, IsUUID } from "class-validator";

export class CreateAccessoriesInvoiceDto {
    @IsUUID()
    id: string;
        
    @IsNumber()
    qty: number;
    
    @IsDate()
    dateArrived: Date
}
