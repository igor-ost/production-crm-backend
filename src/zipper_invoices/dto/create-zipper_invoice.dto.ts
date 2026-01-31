import { IsString, IsNumber, IsUUID } from "class-validator";

export class CreateZipperInvoiceDto {
    @IsUUID()
    material_id: string;
    
    @IsNumber()
    qty: number;

    @IsString()
    dateArrived: string
}
