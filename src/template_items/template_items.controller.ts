import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TemplateItemsService } from './template_items.service';
import { CreateTemplateItemDto } from './dto/create-template_item.dto';
import { UpdateTemplateItemDto } from './dto/update-template_item.dto';

@Controller('template-items')
export class TemplateItemsController {
  constructor(private readonly templateItemsService: TemplateItemsService) {}

  @Post()
  create(@Body() createTemplateItemDto: CreateTemplateItemDto) {
    return this.templateItemsService.create(createTemplateItemDto);
  }

  @Get()
  findAll() {
    return this.templateItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.templateItemsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTemplateItemDto: UpdateTemplateItemDto) {
    return this.templateItemsService.update(id, updateTemplateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.templateItemsService.remove(id);
  }
}
