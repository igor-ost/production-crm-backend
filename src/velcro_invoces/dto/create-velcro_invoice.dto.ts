import { IsString, IsNumber, IsUUID } from "class-validator";

export class CreateVelcroInvoiceDto {
    @IsUUID()
    id: string;
    
    @IsNumber()
    qty: number;

    @IsString()
    dateArrived: string
}
