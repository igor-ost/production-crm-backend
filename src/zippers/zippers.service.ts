import { Injectable, NotFoundException } from '@nestjs/common';
import { ZipperEntity } from './entities/zipper.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateZipperDto } from './dto/update-zipper.dto';
import { CreateZipperDto } from './dto/create-zipper.dto';

@Injectable()
export class ZippersService {
  constructor(
    @InjectRepository(ZipperEntity)
    private readonly zipperRepository: Repository<ZipperEntity>,
  ) {}

  async create(createZipperDto: CreateZipperDto) {
    const zipper = await this.zipperRepository.create(createZipperDto);
    return await this.zipperRepository.save(zipper);
  }

  async findAll(): Promise<ZipperEntity[]> {
    return await this.zipperRepository.find({
      order: {
        createdAt: 'ASC',
      },
    });
  }

  async findOne(id: string): Promise<ZipperEntity> {
    const zipper = await this.zipperRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!zipper) {
      throw new NotFoundException();
    }
    return zipper;
  }

  async update(
    id: string,
    updateZipperDto: UpdateZipperDto,
  ): Promise<ZipperEntity> {
    const zipper = await this.findOne(id);
    Object.assign(zipper, updateZipperDto);
    return await this.zipperRepository.save(zipper);
  }

  async remove(id: string): Promise<{ status: boolean }> {
    const zipper = await this.findOne(id);
    await this.zipperRepository.remove(zipper);
    return { status: true };
  }
}
