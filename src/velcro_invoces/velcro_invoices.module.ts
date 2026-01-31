import { Module } from '@nestjs/common';
import { VelcroInvoicesService } from './velcro_invoices.service';
import { VelcroInvoicesController } from './velcro_invoices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VelcroInvoices } from './entities/velcro_invoice.entity';
import { VelcroModule } from 'src/velcro/velcro.module';

@Module({
  imports: [TypeOrmModule.forFeature([VelcroInvoices]),VelcroModule],
  controllers: [VelcroInvoicesController],
  providers: [VelcroInvoicesService],
})
export class VelcroInvoicesModule {}
 