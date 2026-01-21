import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderStaffsService } from './order_staffs.service';
import { CreateOrderStaffDto } from './dto/create-order_staff.dto';

@Controller('order-staffs')
export class OrderStaffsController {
  constructor(private readonly orderStaffsService: OrderStaffsService) {}

  @Post()
  create(@Body() createOrderStaffDto: CreateOrderStaffDto) {
    return this.orderStaffsService.create(createOrderStaffDto);
  }

  @Get()
  findAll() {
    return this.orderStaffsService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderStaffsService.remove(id);
  }
}
