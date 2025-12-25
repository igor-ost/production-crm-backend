import { Injectable, NotFoundException } from '@nestjs/common';
import { OrdersService } from 'src/orders/orders.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderMaterialEntity } from './entities/order_material.entity';
import { CreateOrderMaterialDto } from './dto/create-order_material.dto';
import { UpdateOrderMaterialDto } from './dto/update-order_material.dto';

@Injectable()
export class OrderMaterialsService {
  constructor(
    @InjectRepository(OrderMaterialEntity)
    private readonly orderMaterialRepository: Repository<OrderMaterialEntity>,
    private readonly orderService: OrdersService,
  ) {}

  async create(dto: CreateOrderMaterialDto) {
    const { material_id, material_type, order_id, qty } = dto;
    const order = await this.orderService.findOne(order_id);
    const item = this.orderMaterialRepository.create({
      order,
      material_id,
      material_type,
      qty,
    });

    return await this.orderMaterialRepository.save(item);
  }

  async create_many(id: string, dto: CreateOrderMaterialDto[]) {
    const order = await this.orderService.findOne(id);
    for (let i = 0; i < dto.length; i++) {
      const item = this.orderMaterialRepository.create({
        order: order,
        material_id: dto[i].material_id,
        material_type: dto[i].material_type,
        qty: dto[i].qty,
      });
      await this.orderMaterialRepository.save(item);
    }
    return { status: true };
  }

  async findAll(): Promise<OrderMaterialEntity[]> {
    return await this.orderMaterialRepository.find({
      order: {
        createdAt: 'ASC',
      },
    });
  }

  async findOne(id: string): Promise<OrderMaterialEntity> {
    const order_materials = await this.orderMaterialRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!order_materials) {
      throw new NotFoundException();
    }
    return order_materials;
  }

  async update(
    id: string,
    updateDto: UpdateOrderMaterialDto,
  ): Promise<OrderMaterialEntity> {
    const order_materials = await this.findOne(id);
    Object.assign(order_materials, updateDto);
    return await this.orderMaterialRepository.save(order_materials);
  }

  async remove(id: string): Promise<{ status: boolean }> {
    const order_materials = await this.findOne(id);
    await this.orderMaterialRepository.remove(order_materials);
    return { status: true };
  }
}
