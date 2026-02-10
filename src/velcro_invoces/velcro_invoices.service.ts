import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VelcroInvoices } from './entities/velcro_invoice.entity';
import { CreateVelcroInvoiceDto } from './dto/create-velcro_invoice.dto';
import { VelcroService } from 'src/velcro/velcro.service';

@Injectable()
export class VelcroInvoicesService {
  constructor(
    @InjectRepository(VelcroInvoices)
    private readonly velcroInvoicesRepository: Repository<VelcroInvoices>,
    private readonly velcroService: VelcroService
  ) {}

  async create(dto: CreateVelcroInvoiceDto) {
    const velcro = await this.velcroService.findOne(dto.material_id)
    const data = {
      velcro: velcro,
      qty: dto.qty,
      price: dto.price,
      dateArrived: dto.dateArrived
    }
    const invoice = await this.velcroInvoicesRepository.create(data);
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
