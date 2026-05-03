import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { ThreadInvoicesService } from './thread_invoices.service';
import { CreateThreadInvoiceDto } from './dto/create-thread_invoice.dto';
import { UpdateThreadInvoiceDto } from './dto/update-thread_invoice.dto';

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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateThreadInvoiceDto) {
    return this.threadInvoicesService.update(id, updateDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.threadInvoicesService.remove(id);
  }
}
