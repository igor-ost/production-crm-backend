import {IsNumber, IsUUID } from "class-validator";

export class CreateOrderStaffDto {
    @IsUUID()
    order_id:string;

    @IsUUID()
    staff_id:string;
    
    @IsNumber()
    qty:number
}
