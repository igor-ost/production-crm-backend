import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ButtonsService } from './buttons.service';
import { CreateButtonsDto } from './dto/create-buttons.dto';
import { UpdateButtonsDto } from './dto/update-buttons.dto';

@Controller('buttons')
export class ButtonsController {
  constructor(private readonly buttonsService: ButtonsService) {}

  @Post()
  create(@Body() createButtonsDto: CreateButtonsDto) {
    return this.buttonsService.create(createButtonsDto);
  }

  @Get()
  findAll() {
    return this.buttonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buttonsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateButtonsDto: UpdateButtonsDto) {
    return this.buttonsService.update(id, updateButtonsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buttonsService.remove(id);
  }
}
