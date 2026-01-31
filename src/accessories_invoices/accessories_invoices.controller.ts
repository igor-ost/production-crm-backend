import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AccessoriesInvoicesService } from './accessories_invoices.service';
import { CreateAccessoriesInvoiceDto } from './dto/create-accessories_invoice.dto';

@Controller('accessories-invoices')
export class AccessoriesInvoicesController {
  constructor(private readonly accessoriesInvoicesService: AccessoriesInvoicesService) {}

  @Post()
  create(@Body() createAccessoriesInvoiceDto: CreateAccessoriesInvoiceDto) {
    return this.accessoriesInvoicesService.create(createAccessoriesInvoiceDto);
  }

  @Get()
  findAll() {
    return this.accessoriesInvoicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accessoriesInvoicesService.findOne(id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accessoriesInvoicesService.remove(id);
  }
}
