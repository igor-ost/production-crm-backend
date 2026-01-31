import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VelcroInvoices } from './entities/velcro_invoice.entity';
import { CreateVelcroInvoiceDto } from './dto/create-velcro_invoice.dto';

@Injectable()
export class VelcroInvoicesService {
  constructor(
    @InjectRepository(VelcroInvoices)
    private readonly velcroInvoicesRepository: Repository<VelcroInvoices>,
  ) {}

  async create(dto: CreateVelcroInvoiceDto) {
    const invoice = await this.velcroInvoicesRepository.create(dto);
    return await this.velcroInvoicesRepository.save(invoice);
  }

  async findAll(): Promise<VelcroInvoices[]> {
    return await this.velcroInvoicesRepository.find({
      order: {
        createdAt: 'ASC',
      }
    });
  }

  async findOne(id: string): Promise<VelcroInvoices> {
    const invoice = await this.velcroInvoicesRepository.findOne({
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
    await this.velcroInvoicesRepository.remove(invoice);
    return { status: true };
  }
}
