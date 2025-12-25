import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FabricsService } from './fabrics.service';
import { CreateFabricDto } from './dto/create-fabric.dto';
import { UpdateFabricDto } from './dto/update-fabric.dto';

@Controller('fabrics')
export class FabricsController {
  constructor(private readonly fabricsService: FabricsService) {}

  @Post()
  create(@Body() createFabricDto: CreateFabricDto) {
    return this.fabricsService.create(createFabricDto);
  }

  @Get()
  findAll() {
    return this.fabricsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fabricsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFabricDto: UpdateFabricDto) {
    return this.fabricsService.update(id, updateFabricDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fabricsService.remove(id);
  }
}
