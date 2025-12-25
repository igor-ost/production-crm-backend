import { Injectable, NotFoundException } from '@nestjs/common';
import { AccessoriesEntity } from './entities/accessories.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateAccessoriesDto } from './dto/update-accessories.dto';
import { CreateAccessoriesDto } from './dto/create-accessories.dto';

@Injectable()
export class AccessoriesService {
  constructor(
    @InjectRepository(AccessoriesEntity)
    private readonly accessoriesRepository: Repository<AccessoriesEntity>,
  ) {}

  async create(createAccessoriesDto: CreateAccessoriesDto) {
    const accessories = await this.accessoriesRepository.create(createAccessoriesDto);
    return await this.accessoriesRepository.save(accessories);
  }

  async findAll(): Promise<AccessoriesEntity[]> {
    return await this.accessoriesRepository.find({
      order: {
        createdAt: 'ASC',
      },
    });
  }

  async findOne(id: string): Promise<AccessoriesEntity> {
    const accessories = await this.accessoriesRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!accessories) {
      throw new NotFoundException();
    }
    return accessories;
  }

  async update(
    id: string,
    updateAccessoriesDto: UpdateAccessoriesDto,
  ): Promise<AccessoriesEntity> {
    const accessories = await this.findOne(id);
    Object.assign(accessories, updateAccessoriesDto);
    return await this.accessoriesRepository.save(accessories);
  }

  async remove(id: string): Promise<{ status: boolean }> {
    const accessories = await this.findOne(id);
    await this.accessoriesRepository.remove(accessories);
    return { status: true };
  }
}
