import { PartialType } from '@nestjs/mapped-types';
import { IsNumber } from 'class-validator';
import { CreateButtonInvoiceDto } from './create-button_invoice.dto';


export class UpdateButtonInvoiceDto extends PartialType(CreateButtonInvoiceDto) {
  @IsNumber()
  qty?: number | undefined;

  @IsNumber()
  price?: number | undefined;


}
