import { Module } from '@nestjs/common';
import { AccessoriesService } from './accessories.service';
import { AccessoriesController } from './accessories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessoriesEntity } from './entities/accessories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccessoriesEntity])],
  controllers: [AccessoriesController],
  providers: [AccessoriesService],
  exports: [AccessoriesService],
})
export class AccessoriesModule {}
