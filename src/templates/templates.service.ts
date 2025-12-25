import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TemplateEntity } from './entities/template.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TemplatesService {
  constructor(
    @InjectRepository(TemplateEntity)
    private readonly templateRepository: Repository<TemplateEntity>,
  ) {}

  async create(createTemplatesDto: CreateTemplateDto) {
    const template = await this.templateRepository.create(createTemplatesDto);
    return await this.templateRepository.save(template);
  }

  async findAll(): Promise<TemplateEntity[]> {
    return await this.templateRepository.find({
      relations: {
        materials: true,
      },
      order: {
        createdAt: 'ASC',
      },
    });
  }

  async findOne(id: string): Promise<TemplateEntity> {
    const template = await this.templateRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        materials: true,
      },
    });
    if (!template) {
      throw new NotFoundException();
    }
    return template;
  }

  async update(
    id: string,
    updateTemplateDto: UpdateTemplateDto,
  ): Promise<TemplateEntity> {
    const template = await this.findOne(id);
    Object.assign(template, updateTemplateDto);
    return await this.templateRepository.save(template);
  }

  async remove(id: string): Promise<{ status: boolean }> {
    const template = await this.findOne(id);
    await this.templateRepository.remove(template);
    return { status: true };
  }
}
