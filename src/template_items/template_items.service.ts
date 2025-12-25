import { Injectable, NotFoundException } from '@nestjs/common';
import { TemplateItemEntity } from './entities/template_item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateTemplateItemDto,
  MaterialType,
} from './dto/create-template_item.dto';
import { UpdateTemplateItemDto } from './dto/update-template_item.dto';
import { TemplatesService } from 'src/templates/templates.service';

@Injectable()
export class TemplateItemsService {
  constructor(
    @InjectRepository(TemplateItemEntity)
    private readonly templateItemsRepository: Repository<TemplateItemEntity>,
    private readonly templateService: TemplatesService,
  ) {}

  async create(dto: CreateTemplateItemDto) {
    const { material_id, material_type, template_id, qty } = dto;
    const template = await this.templateService.findOne(template_id);
    const item = this.templateItemsRepository.create({
      template,
      material_id,
      material_type,
      qty,
    });

    return await this.templateItemsRepository.save(item);
  }

  async findAll(): Promise<TemplateItemEntity[]> {
    return await this.templateItemsRepository.find({
      order: {
        createdAt: 'ASC',
      },
    });
  }

  async findOne(id: string): Promise<TemplateItemEntity> {
    const template_item = await this.templateItemsRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!template_item) {
      throw new NotFoundException();
    }
    return template_item;
  }

  async update(
    id: string,
    updateTemplateItemDto: UpdateTemplateItemDto,
  ): Promise<TemplateItemEntity> {
    const template_item = await this.findOne(id);
    Object.assign(template_item, updateTemplateItemDto);
    return await this.templateItemsRepository.save(template_item);
  }

  async remove(id: string): Promise<{ status: boolean }> {
    const template_item = await this.findOne(id);
    await this.templateItemsRepository.remove(template_item);
    return { status: true };
  }
}
