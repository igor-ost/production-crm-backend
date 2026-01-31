import { Module } from '@nestjs/common';
import { ZipperInvoicesService } from './zipper_invoices.service';
import { ZipperInvoicesController } from './zipper_invoices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZipperInvoices } from './entities/zipper_invoice.entity';
import { ZippersModule } from 'src/zippers/zippers.module';

@Module({
  imports: [TypeOrmModule.forFeature([ZipperInvoices]),ZippersModule],
  controllers: [ZipperInvoicesController],
  providers: [ZipperInvoicesService],
})
export class ZipperInvoicesModule {}
