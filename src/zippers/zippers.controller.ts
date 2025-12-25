import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ZippersService } from './zippers.service';
import { CreateZipperDto } from './dto/create-zipper.dto';
import { UpdateZipperDto } from './dto/update-zipper.dto';

@Controller('zippers')
export class ZippersController {
  constructor(private readonly zippersService: ZippersService) {}

  @Post()
  create(@Body() createZipperDto: CreateZipperDto) {
    return this.zippersService.create(createZipperDto);
  }

  @Get()
  findAll() {
    return this.zippersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zippersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateZipperDto: UpdateZipperDto) {
    return this.zippersService.update(id, updateZipperDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zippersService.remove(id);
  }
}
