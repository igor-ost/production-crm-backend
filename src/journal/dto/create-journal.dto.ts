import { IsNumber, IsString, IsUUID, Min } from 'class-validator';

export class CreateJournalDto {
  @IsUUID()
  user_id: string;

  @IsUUID()
  order_id: string;

  @IsNumber()
  @Min(0)
  quantity: number;

  @IsString()
  type: string;
}
