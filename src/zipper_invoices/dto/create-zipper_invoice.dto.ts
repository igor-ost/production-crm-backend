import { Type } from "class-transformer";
import { IsDate, IsNumber, IsUUID } from "class-validator";

export class CreateZipperInvoiceDto {
    @IsUUID()
    id: string;
    
    @IsNumber()
    qty: number;

    @IsDate()
    @Type(() => Date)
    dateArrived: Date
}
