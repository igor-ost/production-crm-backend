import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderStaffDto } from './dto/create-order_staff.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderStaffEntity } from './entities/order_staff.entity';
import { Repository } from 'typeorm';
import { OrdersService } from 'src/orders/orders.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class OrderStaffsService {
  constructor(
      @InjectRepository(OrderStaffEntity)
      private readonly orderStaffRepository: Repository<OrderStaffEntity>,
      private readonly orderService: OrdersService,
      private readonly userService: UserService
  ) {}
  async create(dto: CreateOrderStaffDto) {
    const { order_id, staff_id,qty} = dto;
    const order = await this.orderService.findOne(order_id);
    const user = await this.userService.findOne(staff_id);
    const item = this.orderStaffRepository.create({
      staff_id,
      order_id,
      qty,
      order,
      user,
    });

    return await this.orderStaffRepository.save(item);
  }


  async findAll(): Promise<OrderStaffEntity[]> {
    return await this.orderStaffRepository.find({
      order: {
        createdAt: 'ASC',
      },
    });
  }

  async findOne(id: string): Promise<OrderStaffEntity> {
    const order_materials = await this.orderStaffRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!order_materials) {
      throw new NotFoundException();
    }
    return order_materials;
  }


  async remove(id: string): Promise<{ status: boolean }> {
    const order_materials = await this.findOne(id);
    await this.orderStaffRepository.remove(order_materials);
    return { status: true };
  }
}
