import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderMaterialsService } from './order_materials.service';
import { CreateOrderMaterialDto } from './dto/create-order_material.dto';
import { UpdateOrderMaterialDto } from './dto/update-order_material.dto';

@Controller('order-materials')
export class OrderMaterialsController {
  constructor(private readonly orderMaterialsService: OrderMaterialsService) {}

  @Post()
  create(@Body() createOrderMaterialDto: CreateOrderMaterialDto) {
    return this.orderMaterialsService.create(createOrderMaterialDto);
  }

  @Post(':id')
  creat_many(
    @Param('id') id: string,
    @Body() createOrderMaterialDto: CreateOrderMaterialDto[],
  ) {
    return this.orderMaterialsService.create_many(id, createOrderMaterialDto);
  }

  @Get()
  findAll() {
    return this.orderMaterialsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderMaterialsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrderMaterialDto: UpdateOrderMaterialDto,
  ) {
    return this.orderMaterialsService.update(id, updateOrderMaterialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderMaterialsService.remove(id);
  }
}
