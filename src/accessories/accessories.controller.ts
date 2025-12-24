import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AccessoriesService } from './accessories.service';
import { CreateAccessoriesDto } from './dto/create-accessories.dto';
import { UpdateAccessoriesDto } from './dto/update-accessories.dto';

@Controller('accessories')
export class AccessoriesController {
    constructor(private readonly accessoriesService: AccessoriesService) {}
  
    @Post()
    create(@Body() createAccessoriesDto: CreateAccessoriesDto) {
      return this.accessoriesService.create(createAccessoriesDto);
    }
  
    @Get()
    findAll() {
      return this.accessoriesService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.accessoriesService.findOne(id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateAccessoriesDto: UpdateAccessoriesDto) {
      return this.accessoriesService.update(id, updateAccessoriesDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.accessoriesService.remove(id);
    }
}
