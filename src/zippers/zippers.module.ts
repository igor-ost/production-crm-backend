import { Module } from '@nestjs/common';
import { ZippersService } from './zippers.service';
import { ZippersController } from './zippers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZipperEntity } from './entities/zipper.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ZipperEntity])],
  controllers: [ZippersController],
  providers: [ZippersService],
  exports: [ZippersService],
})
export class ZippersModule {}
