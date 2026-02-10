import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { MaterialConsumptionsService } from './material_consumptions.service';
import { CreateMaterialConsumptionDto } from './dto/create-material_consumption.dto';

@Controller('material-consumptions')
export class MaterialConsumptionsController {
  constructor(private readonly materialConsumptionsService: MaterialConsumptionsService) {}

  @Post()
  create(@Body() dto: CreateMaterialConsumptionDto) {
    return this.materialConsumptionsService.create(dto);
  }

  @Get()
  findAll() {
    return this.materialConsumptionsService.findAll();
  }

  @Post(':id')
    creat_many(
      @Param('id') id: string,
      @Body() dto: CreateMaterialConsumptionDto[],
    ) {
      return this.materialConsumptionsService.create_many(id, dto);
    }
  

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.materialConsumptionsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materialConsumptionsService.remove(id);
  }
}
