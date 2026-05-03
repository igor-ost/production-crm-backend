import { PartialType } from '@nestjs/mapped-types';
import { IsNumber } from 'class-validator';
import { CreateAccessoriesInvoiceDto } from './create-accessories_invoice.dto';



export class UpdateAccessoiresInvoiceDto extends PartialType(CreateAccessoriesInvoiceDto) {
  @IsNumber()
  qty?: number | undefined;

  @IsNumber()
  price?: number | undefined;


}
