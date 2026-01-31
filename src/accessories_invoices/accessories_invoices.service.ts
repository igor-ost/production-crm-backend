import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccessoriesInvoice } from './entities/accessories_invoice.entity';
import { CreateAccessoriesInvoiceDto } from './dto/create-accessories_invoice.dto';


@Injectable()
export class AccessoriesInvoicesService {
  constructor(
    @InjectRepository(AccessoriesInvoice)
    private readonly accessoriesInvoicesRepository: Repository<AccessoriesInvoice>,
  ) {}

  async create(dto: CreateAccessoriesInvoiceDto) {
    const invoice = await this.accessoriesInvoicesRepository.create(dto);
    return await this.accessoriesInvoicesRepository.save(invoice);
  }

  async findAll(): Promise<AccessoriesInvoice[]> {
    return await this.accessoriesInvoicesRepository.find({
      order: {
        createdAt: 'ASC',
      }
    });
  }

  async findOne(id: string): Promise<AccessoriesInvoice> {
    const invoice = await this.accessoriesInvoicesRepository.findOne({
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
    await this.accessoriesInvoicesRepository.remove(invoice);
    return { status: true };
  }
}
