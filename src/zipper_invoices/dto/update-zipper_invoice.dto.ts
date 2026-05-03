import { PartialType } from '@nestjs/mapped-types';
import { IsNumber } from 'class-validator';
import { CreateZipperInvoiceDto } from './create-zipper_invoice.dto';

export class UpdateZipperInvoiceDto extends PartialType(CreateZipperInvoiceDto) {
  @IsNumber()
  qty?: number | undefined;

  @IsNumber()
  price?: number | undefined;


}
