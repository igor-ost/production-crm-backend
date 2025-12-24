import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VelcroService } from './velcro.service';
import { CreateVelcroDto } from './dto/create-velcro.dto';
import { UpdateVelcroDto } from './dto/update-velcro.dto';

@Controller('velcro')
export class VelcroController {
  constructor(private readonly velcroService: VelcroService) {}

  @Post()
  create(@Body() createVelcroDto: CreateVelcroDto) {
    return this.velcroService.create(createVelcroDto);
  }

  @Get()
  findAll() {
    return this.velcroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.velcroService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVelcroDto: UpdateVelcroDto) {
    return this.velcroService.update(id, updateVelcroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.velcroService.remove(id);
  }
}
