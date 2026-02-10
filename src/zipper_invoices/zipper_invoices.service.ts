import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateZipperInvoiceDto } from './dto/create-zipper_invoice.dto';
import { ZipperInvoices } from './entities/zipper_invoice.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ZippersService } from 'src/zippers/zippers.service';

@Injectable()
export class ZipperInvoicesService {
  constructor(
    @InjectRepository(ZipperInvoices)
    private readonly zipperInvoicesRepository: Repository<ZipperInvoices>,
    private readonly zipperService: ZippersService
  ) {}

  async create(dto: CreateZipperInvoiceDto) {
    const zipper = await this.zipperService.findOne(dto.material_id)
    const data = {
      zippers: zipper,
      qty: dto.qty,
      price:  dto.price,
      dateArrived: dto.dateArrived
    }
    const invoice = await this.zipperInvoicesRepository.create(data);
    return await this.zipperInvoicesRepository.save(invoice);
  }

  async findAll(): Promise<ZipperInvoices[]> {
    return await this.zipperInvoicesRepository.find({
      order: {
        createdAt: 'ASC',
      }
    });
  }

  async findOne(id: string): Promise<ZipperInvoices> {
    const invoice = await this.zipperInvoicesRepository.findOne({
      where: {
        id: id,
      }
    });
    if (!invoice) {
      throw new NotFoundException();
    }
    return invoice;
  }


  async remove(id: string): Promise<{ status: boolean }> {
    const invoice = await this.findOne(id);
    await this.zipperInvoicesRepository.remove(invoice);
    return { status: true };
  }
}
