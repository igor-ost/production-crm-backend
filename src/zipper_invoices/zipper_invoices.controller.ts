import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { ZipperInvoicesService } from './zipper_invoices.service';
import { CreateZipperInvoiceDto } from './dto/create-zipper_invoice.dto';
import { UpdateZipperInvoiceDto } from './dto/update-zipper_invoice.dto';

@Controller('zipper-invoices')
export class ZipperInvoicesController {
  constructor(private readonly zipperInvocesService: ZipperInvoicesService) {}

  @Post()
  create(@Body() createZipperInvoceDto: CreateZipperInvoiceDto) {
    return this.zipperInvocesService.create(createZipperInvoceDto);
  }

  @Get()
  findAll() {
    return this.zipperInvocesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zipperInvocesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateZipperDto: UpdateZipperInvoiceDto) {
    return this.zipperInvocesService.update(id, updateZipperDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zipperInvocesService.remove(id);
  }
}
