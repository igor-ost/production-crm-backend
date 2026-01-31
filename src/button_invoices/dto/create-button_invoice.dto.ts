import { IsNumber, IsString, IsUUID } from "class-validator";

export class CreateButtonInvoiceDto {
    @IsUUID()
    id: string;
    
    @IsNumber()
    qty: number;

    @IsString()
    dateArrived: string
}
