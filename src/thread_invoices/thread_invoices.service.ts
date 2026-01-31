import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ThreadInvoice } from './entities/thread_invoice.entity';
import { CreateThreadInvoiceDto } from './dto/create-thread_invoice.dto';

@Injectable()
export class ThreadInvoicesService {
  constructor(
    @InjectRepository(ThreadInvoice)
    private readonly threadInvoicesRepository: Repository<ThreadInvoice>,
  ) {}

  async create(dto: CreateThreadInvoiceDto) {
    const invoice = await this.threadInvoicesRepository.create(dto);
    return await this.threadInvoicesRepository.save(invoice);
  }

  async findAll(): Promise<ThreadInvoice[]> {
    return await this.threadInvoicesRepository.find({
      order: {
        createdAt: 'ASC',
      }
    });
  }

  async findOne(id: string): Promise<ThreadInvoice> {
    const invoice = await this.threadInvoicesRepository.findOne({
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
    await this.threadInvoicesRepository.remove(invoice);
    return { status: true };
  }
}
