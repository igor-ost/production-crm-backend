import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMaterialConsumptionDto } from './dto/create-material_consumption.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdersService } from 'src/orders/orders.service';
import { Repository } from 'typeorm';
import { MaterialConsumptionEntity } from './entities/material_consumption.entity';

@Injectable()
export class MaterialConsumptionsService {
    constructor(
      @InjectRepository(MaterialConsumptionEntity)
      private readonly materialConsumptionRepository: Repository<MaterialConsumptionEntity>,
      private readonly orderService: OrdersService,
    ) {}
  async create(dto: CreateMaterialConsumptionDto) {
    const { material_id, material_type, order_id, qty } = dto;
    const order = await this.orderService.findOne(order_id);
    const item = this.materialConsumptionRepository.create({
      order,
      material_id,
      material_type,
      qty,
    });

    return await this.materialConsumptionRepository.save(item);
  }

  async create_many(id: string, dto: CreateMaterialConsumptionDto[]) {
    const order = await this.orderService.findOne(id);
    for (let i = 0; i < dto.length; i++) {
      const item = this.materialConsumptionRepository.create({
        order: order,
        material_id: dto[i].material_id,
        material_type: dto[i].material_type,
        qty: dto[i].qty,
      });
      await this.materialConsumptionRepository.save(item);
    }
    return { status: true };
  }

  async findAll(): Promise<MaterialConsumptionEntity[]> {
    return await this.materialConsumptionRepository.find({
      order: {
        createdAt: 'ASC',
      },
      relations: {
        order: true
      }
    });
  }

  async findOne(id: string): Promise<MaterialConsumptionEntity> {
    const order_materials = await this.materialConsumptionRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        order: true
      }
    });
    if (!order_materials) {
      throw new NotFoundException();
    }
    return order_materials;
  }


  async remove(id: string): Promise<{ status: boolean }> {
    const order_materials = await this.findOne(id);
    await this.materialConsumptionRepository.remove(order_materials);
    return { status: true };
  }
}
