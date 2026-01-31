import { Module } from '@nestjs/common';
import { VelcroInvoicesService } from './velcro_invoices.service';
import { VelcroInvoicesController } from './velcro_invoices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VelcroInvoices } from './entities/velcro_invoice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VelcroInvoices])],
  controllers: [VelcroInvoicesController],
  providers: [VelcroInvoicesService],
})
export class VelcroInvoicesModule {}
 