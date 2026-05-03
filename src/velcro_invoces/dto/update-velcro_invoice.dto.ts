import { PartialType } from '@nestjs/mapped-types';
import { IsNumber } from 'class-validator';
import { CreateVelcroInvoiceDto } from './create-velcro_invoice.dto';

export class UpdateVelcroInvoiceDto extends PartialType(CreateVelcroInvoiceDto) {
  @IsNumber()
  qty?: number | undefined;

  @IsNumber()
  price?: number | undefined;


}
