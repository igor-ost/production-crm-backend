import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { OrdersModule } from 'src/orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoEntity } from './entities/photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoEntity]), OrdersModule],
  controllers: [PhotosController],
  providers: [PhotosService],
})
export class PhotosModule {}
