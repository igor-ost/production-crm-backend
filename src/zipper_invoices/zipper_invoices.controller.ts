import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ZipperInvoicesService } from './zipper_invoices.service';
import { CreateZipperInvoiceDto } from './dto/create-zipper_invoice.dto';

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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zipperInvocesService.remove(id);
  }
}
