import { Module } from '@nestjs/common';
import { ThreadInvoicesService } from './thread_invoices.service';
import { ThreadInvoicesController } from './thread_invoices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThreadInvoice } from './entities/thread_invoice.entity';
import { ThreadsModule } from 'src/threads/threads.module';

@Module({
  imports: [TypeOrmModule.forFeature([ThreadInvoice]), ThreadsModule],
  controllers: [ThreadInvoicesController],
  providers: [ThreadInvoicesService],
})
export class ThreadInvoicesModule {}
