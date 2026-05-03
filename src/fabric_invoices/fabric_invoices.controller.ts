import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { FabricInvoicesService } from './fabric_invoices.service';
import { CreateFabricInvoiceDto } from './dto/create-fabric_invoice.dto';
import { UpdateFabricInvoiceDto } from './dto/update-fabric_invoice.dto';

@Controller('fabric-invoices')
export class FabricInvoicesController {
  constructor(private readonly fabricInvoicesService: FabricInvoicesService) {}

  @Post()
  create(@Body() createFabricInvoiceDto: CreateFabricInvoiceDto) {
    return this.fabricInvoicesService.create(createFabricInvoiceDto);
  }

  @Get()
  findAll() {
    return this.fabricInvoicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fabricInvoicesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateFabricInvoiceDto) {
    return this.fabricInvoicesService.update(id, updateDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fabricInvoicesService.remove(id);
  }
}
