import { Module } from '@nestjs/common';
import { FabricInvoicesService } from './fabric_invoices.service';
import { FabricInvoicesController } from './fabric_invoices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FabricInvoices } from './entities/fabric_invoice.entity';
import { FabricsModule } from 'src/fabrics/fabrics.module';

@Module({
  imports: [TypeOrmModule.forFeature([FabricInvoices]),FabricsModule],
  controllers: [FabricInvoicesController],
  providers: [FabricInvoicesService],
})
export class FabricInvoicesModule {}
