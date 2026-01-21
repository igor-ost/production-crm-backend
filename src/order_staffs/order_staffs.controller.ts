import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderStaffsService } from './order_staffs.service';
import { CreateOrderStaffDto } from './dto/create-order_staff.dto';
import { UpdateOrderStaffDto } from './dto/update-order_staff.dto';

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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderStaffsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderStaffDto: UpdateOrderStaffDto) {
    return this.orderStaffsService.update(id, updateOrderStaffDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderStaffsService.remove(id);
  }
}
