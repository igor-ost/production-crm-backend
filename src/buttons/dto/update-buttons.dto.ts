import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from "class-validator";
import { CreateButtonsDto } from './create-buttons.dto';


export class UpdateButtonsDto extends PartialType(CreateButtonsDto) {

        @IsString()
        color?:string | undefined

        @IsString()
        type?:string | undefined
        
        @IsString()
        unit?: string | undefined
        
        @IsNumber()
        price?: number | undefined
        
        @IsNumber()
        qty?: number | undefined
}
