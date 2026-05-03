import { PartialType } from '@nestjs/mapped-types';
import { IsNumber } from 'class-validator';
import { CreateThreadInvoiceDto } from './create-thread_invoice.dto';

export class UpdateThreadInvoiceDto extends PartialType(CreateThreadInvoiceDto) {
  @IsNumber()
  qty?: number | undefined;

  @IsNumber()
  price?: number | undefined;


}
