import { IsString, IsNumber, IsUUID } from "class-validator";

export class CreateZipperInvoiceDto {
    @IsUUID()
    material_id: string;
    
    @IsNumber()
    qty: number;

    @IsNumber()
    price:number

    @IsString()
    dateArrived: string
}
