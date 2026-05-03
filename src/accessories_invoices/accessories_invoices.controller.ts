import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { AccessoriesInvoicesService } from './accessories_invoices.service';
import { CreateAccessoriesInvoiceDto } from './dto/create-accessories_invoice.dto';
import { UpdateAccessoiresInvoiceDto } from './dto/update-accessories_invoice.dto';

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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateAccessoiresInvoiceDto) {
    return this.accessoriesInvoicesService.update(id, updateDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accessoriesInvoicesService.remove(id);
  }
}
