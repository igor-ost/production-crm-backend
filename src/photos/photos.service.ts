import { File } from 'multer';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PhotoEntity } from './entities/photo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdersService } from 'src/orders/orders.service';

import * as fs from 'fs';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(PhotoEntity)
    private readonly photosRepository: Repository<PhotoEntity>,
    private readonly ordersService: OrdersService,
  ) {}

  async savePhoto(orderId: string, file: File) {
    const order = await this.ordersService.findOne(orderId);
    const photo = this.photosRepository.create({
      order: order,
      filename: file.filename,
      path: file.path,
    });

    return this.photosRepository.save(photo);
  }

  async deletePhoto(id: string) {
    const photo = await this.photosRepository.findOne({ where: { id } });
    if (!photo) throw new NotFoundException('Фото не найдено');

    if (fs.existsSync(photo.path)) {
      fs.unlinkSync(photo.path);
    }

    await this.photosRepository.delete(id);
    return { status: true };
  }
}
