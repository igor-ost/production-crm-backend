import { Injectable, NotFoundException } from '@nestjs/common';
import { OrderEntity } from './entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { TemplatesService } from 'src/templates/templates.service';
import { CustomerService } from 'src/customer/customer.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
    private readonly templateService: TemplatesService,
    private readonly customerService: CustomerService,
  ) {}

  async create(dto: CreateOrderDto) {
    const template = await this.templateService.findOne(dto.template_id);
    const customer = await this.customerService.findOne(dto.customer_id);

    const now = new Date();
    const yy = String(now.getFullYear()).slice(2);
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const datePrefix = `${yy}${mm}${dd}`;

    const lastOrderToday = await this.orderRepository
      .createQueryBuilder('order')
      .where('order.order_number LIKE :date', { date: `${datePrefix}_%` })
      .orderBy('order.order_number', 'DESC')
      .getOne();

    let nextNumber = 1;

    if (lastOrderToday) {
      const lastSeq = Number(lastOrderToday.order_number.split('_')[1]);
      nextNumber = lastSeq + 1;
    }

    const orderNumber = `${datePrefix}_${String(nextNumber).padStart(5, '0')}`;
    const order = await this.orderRepository.create({
      order_number: orderNumber,
      customer: customer,
      template: template,
      size: dto.size,
      status: dto.status,
      sewing_price: dto.sewing_price,
      cutting_price: dto.cutting_price,
      quantity: dto.quantity,
      buttons: dto.buttons,
      notes: dto.notes,
      deadline: dto.deadline
    });
    return await this.orderRepository.save(order);
  }

  async findAll(): Promise<OrderEntity[]> {
    return await this.orderRepository.find({
      relations: {
        customer: true,
        template: true,
        materials: true,
        photos: true,
        staffs: {
          user: true
        },
        journal: {
          user: true,
          order: true,
        },
      },
      order: {
        createdAt: 'ASC',
      },
    });
  }

  async findOne(id: string): Promise<OrderEntity> {
    const order = await this.orderRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        customer: true,
        template: true,
        materials: true,
        photos: true,
        staffs: {
          user: true
        },
        journal: {
          user: true,
          order: true,
        },
      },
    });
    if (!order) {
      throw new NotFoundException();
    }
    return order;
  }

  async update(id: string, updateDto: UpdateOrderDto): Promise<OrderEntity> {
    const order = await this.findOne(id);
    Object.assign(order, updateDto);
    return await this.orderRepository.save(order);
  }

  async remove(id: string): Promise<{ status: boolean }> {
    const order = await this.findOne(id);
    await this.orderRepository.remove(order);
    return { status: true };
  }
}
