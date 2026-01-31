import { IsDate, IsNumber, IsUUID } from "class-validator";

export class CreateFabricInvoiceDto {
    @IsUUID()
    id: string;
    
    @IsNumber()
    qty: number;

    @IsDate()
    dateArrived: Date
}
