import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { VelcroInvoicesService } from './velcro_invoices.service';
import { CreateVelcroInvoiceDto } from './dto/create-velcro_invoice.dto';

@Controller('velcro-invoces')
export class VelcroInvoicesController {
  constructor(private readonly velcroInvocesService: VelcroInvoicesService) {}

  @Post()
  create(@Body() createVelcroInvoceDto: CreateVelcroInvoiceDto) {
    return this.velcroInvocesService.create(createVelcroInvoceDto);
  }

  @Get()
  findAll() {
    return this.velcroInvocesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.velcroInvocesService.findOne(id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.velcroInvocesService.remove(id);
  }
}
