import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
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
  
  @Post("remove")
  remove_post(@Body() dto: {order_id:string,material_id:string}) {
    return this.materialConsumptionsService.removePost(dto);
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
  
  
  @Patch('update')
  update(@Body() dto: {order_id:string,material_id:string,qty:number}) {
    return this.materialConsumptionsService.update(dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materialConsumptionsService.remove(id);
  }
  
}
