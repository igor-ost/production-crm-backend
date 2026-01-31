import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ButtonInvoicesService } from './button_invoices.service';
import { CreateButtonInvoiceDto } from './dto/create-button_invoice.dto';

@Controller('button-invoices')
export class ButtonInvoicesController {
  constructor(private readonly buttonInvoicesService: ButtonInvoicesService) {}

  @Post()
  create(@Body() createButtonInvoiceDto: CreateButtonInvoiceDto) {
    return this.buttonInvoicesService.create(createButtonInvoiceDto);
  }

  @Get()
  findAll() {
    return this.buttonInvoicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buttonInvoicesService.findOne(id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buttonInvoicesService.remove(id);
  }
}
