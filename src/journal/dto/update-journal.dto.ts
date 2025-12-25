import { PartialType } from '@nestjs/mapped-types';
import { CreateJournalDto } from './create-journal.dto';
import { IsNumber, IsString, Min } from 'class-validator';

export class UpdateJournalDto extends PartialType(CreateJournalDto) {
  @IsNumber()
  @Min(0)
  quantity: number | undefined;

  @IsString()
  type: string | undefined;
}
