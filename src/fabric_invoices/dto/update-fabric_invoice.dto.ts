import { PartialType } from '@nestjs/mapped-types';
import { IsNumber } from 'class-validator';
import { CreateFabricInvoiceDto } from './create-fabric_invoice.dto';


export class UpdateFabricInvoiceDto extends PartialType(CreateFabricInvoiceDto) {
  @IsNumber()
  qty?: number | undefined;

  @IsNumber()
  price?: number | undefined;


}
