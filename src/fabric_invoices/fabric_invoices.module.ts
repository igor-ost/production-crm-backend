import { Module } from '@nestjs/common';
import { FabricInvoicesService } from './fabric_invoices.service';
import { FabricInvoicesController } from './fabric_invoices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FabricInvoices } from './entities/fabric_invoice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FabricInvoices])],
  controllers: [FabricInvoicesController],
  providers: [FabricInvoicesService],
})
export class FabricInvoicesModule {}
