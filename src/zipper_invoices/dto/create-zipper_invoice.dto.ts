import { IsString, IsNumber, IsUUID } from "class-validator";

export class CreateZipperInvoiceDto {
    @IsUUID()
    id: string;
    
    @IsNumber()
    qty: number;

    @IsString()
    dateArrived: string
}
