import { Module } from '@nestjs/common';
import { AccessoriesInvoicesService } from './accessories_invoices.service';
import { AccessoriesInvoicesController } from './accessories_invoices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessoriesInvoice } from './entities/accessories_invoice.entity';
import { AccessoriesModule } from 'src/accessories/accessories.module';

@Module({
  imports: [TypeOrmModule.forFeature([AccessoriesInvoice]),AccessoriesModule],
  controllers: [AccessoriesInvoicesController],
  providers: [AccessoriesInvoicesService],
})
export class AccessoriesInvoicesModule {}
