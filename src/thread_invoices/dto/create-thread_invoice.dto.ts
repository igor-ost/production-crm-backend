import { IsDate, IsNumber, IsUUID } from "class-validator";

export class CreateThreadInvoiceDto {
    @IsUUID()
    id: string;
    
    @IsNumber()
    qty: number;

    @IsDate()
    dateArrived: Date
}
