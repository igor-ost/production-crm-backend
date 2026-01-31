import { Module } from '@nestjs/common';
import { ButtonInvoicesService } from './button_invoices.service';
import { ButtonInvoicesController } from './button_invoices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ButtonInvoices } from './entities/button_invoice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ButtonInvoices])],
  controllers: [ButtonInvoicesController],
  providers: [ButtonInvoicesService],
})
export class ButtonInvoicesModule {}
