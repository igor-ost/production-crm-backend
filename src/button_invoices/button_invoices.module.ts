import { Module } from '@nestjs/common';
import { ButtonInvoicesService } from './button_invoices.service';
import { ButtonInvoicesController } from './button_invoices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ButtonInvoices } from './entities/button_invoice.entity';
import { ButtonsModule } from 'src/buttons/buttons.module';

@Module({
  imports: [TypeOrmModule.forFeature([ButtonInvoices]),ButtonsModule],
  controllers: [ButtonInvoicesController],
  providers: [ButtonInvoicesService],
})
export class ButtonInvoicesModule {}
