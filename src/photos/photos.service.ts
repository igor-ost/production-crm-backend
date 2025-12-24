import { File } from 'multer';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PhotoEntity } from './entities/photo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdersService } from 'src/orders/orders.service';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(PhotoEntity)
    private readonly photosRepository: Repository<PhotoEntity>,
    private readonly ordersService: OrdersService,
  ) {}

  async create(file: File, orderId: string) {

  }
}
