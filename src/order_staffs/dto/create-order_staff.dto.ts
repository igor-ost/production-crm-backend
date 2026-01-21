import {IsUUID } from "class-validator";

export class CreateOrderStaffDto {
    @IsUUID()
    order_id:string;

    @IsUUID()
    staff_id:string;
}
