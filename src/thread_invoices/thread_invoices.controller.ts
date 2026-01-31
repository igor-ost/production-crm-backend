import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ThreadInvoicesService } from './thread_invoices.service';
import { CreateThreadInvoiceDto } from './dto/create-thread_invoice.dto';

@Controller('thread-invoices')
export class ThreadInvoicesController {
  constructor(private readonly threadInvoicesService: ThreadInvoicesService) {}

  @Post()
  create(@Body() createThreadInvoceDto: CreateThreadInvoiceDto) {
    return this.threadInvoicesService.create(createThreadInvoceDto);
  }

  @Get()
  findAll() {
    return this.threadInvoicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.threadInvoicesService.findOne(id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.threadInvoicesService.remove(id);
  }
}
