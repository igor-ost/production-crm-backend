import { IsDate, IsNumber, IsUUID } from "class-validator";

export class CreateZipperInvoiceDto {
    @IsUUID()
    id: string;
    
    @IsNumber()
    qty: number;

    @IsDate()
    dateArrived: Date
}
