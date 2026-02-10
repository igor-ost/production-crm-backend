import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccessoriesInvoice } from './entities/accessories_invoice.entity';
import { CreateAccessoriesInvoiceDto } from './dto/create-accessories_invoice.dto';
import { AccessoriesService } from 'src/accessories/accessories.service';


@Injectable()
export class AccessoriesInvoicesService {
  constructor(
    @InjectRepository(AccessoriesInvoice)
    private readonly accessoriesInvoicesRepository: Repository<AccessoriesInvoice>,
    private readonly accessoriesService: AccessoriesService
  ) {}

  async create(dto: CreateAccessoriesInvoiceDto) {
    const accessories = await this.accessoriesService.findOne(dto.material_id)
    const data = {
      accessories: accessories,
      qty: dto.qty,
      price: dto.price,
      dateArrived: dto.dateArrived
    }
    const invoice = await this.accessoriesInvoicesRepository.create(data);
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
