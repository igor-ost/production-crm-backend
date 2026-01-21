import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderStaffDto } from './create-order_staff.dto';

export class UpdateOrderStaffDto extends PartialType(CreateOrderStaffDto) {}
