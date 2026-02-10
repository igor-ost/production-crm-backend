import { IsNumber, IsString, IsUUID } from "class-validator";

export class CreateButtonInvoiceDto {
    @IsUUID()
    material_id: string;
    
    @IsNumber()
    qty: number;

    @IsString()
    dateArrived: string

    @IsNumber()
    price:number
}
