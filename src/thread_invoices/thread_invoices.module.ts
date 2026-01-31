import { Module } from '@nestjs/common';
import { ThreadInvoicesService } from './thread_invoices.service';
import { ThreadInvoicesController } from './thread_invoices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThreadInvoice } from './entities/thread_invoice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ThreadInvoice])],
  controllers: [ThreadInvoicesController],
  providers: [ThreadInvoicesService],
})
export class ThreadInvoicesModule {}
