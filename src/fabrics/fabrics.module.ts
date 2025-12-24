import { Module } from '@nestjs/common';
import { FabricsService } from './fabrics.service';
import { FabricsController } from './fabrics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FabricEntity } from './entities/fabric.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FabricEntity])],
  controllers: [FabricsController],
  providers: [FabricsService],
  exports: [FabricsService],
})
export class FabricsModule {}
