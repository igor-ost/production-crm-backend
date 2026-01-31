import { IsDate, IsNumber, IsUUID } from "class-validator";

export class CreateButtonInvoiceDto {
    @IsUUID()
    id: string;
    
    @IsNumber()
    qty: number;

    @IsDate()
    dateArrived: Date
}
