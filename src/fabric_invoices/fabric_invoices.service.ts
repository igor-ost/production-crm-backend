import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FabricInvoices } from './entities/fabric_invoice.entity';
import { CreateFabricInvoiceDto } from './dto/create-fabric_invoice.dto';
import { FabricsService } from 'src/fabrics/fabrics.service';

@Injectable()
export class FabricInvoicesService {
  constructor(
    @InjectRepository(FabricInvoices)
    private readonly fabricInvoicesRepository: Repository<FabricInvoices>,
    private readonly fabricService: FabricsService
  ) {}

  async create(dto: CreateFabricInvoiceDto) {
    const fabric = await this.fabricService.findOne(dto.material_id)
    const data = {
      fabrics: fabric,
      qty: dto.qty,
      dateArrived: dto.dateArrived
    }
    const invoice = await this.fabricInvoicesRepository.create(data);
    return await this.fabricInvoicesRepository.save(invoice);
  }

  async findAll(): Promise<FabricInvoices[]> {
    return await this.fabricInvoicesRepository.find({
      order: {
        createdAt: 'ASC',
      }
    });
  }

  async findOne(id: string): Promise<FabricInvoices> {
    const invoice = await this.fabricInvoicesRepository.findOne({
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
    await this.fabricInvoicesRepository.remove(invoice);
    return { status: true };
  }
}
