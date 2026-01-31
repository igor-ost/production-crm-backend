import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ButtonInvoices } from './entities/button_invoice.entity';
import { CreateButtonInvoiceDto } from './dto/create-button_invoice.dto';


@Injectable()
export class ButtonInvoicesService {
  constructor(
    @InjectRepository(ButtonInvoices)
    private readonly buttonInvoicesRepository: Repository<ButtonInvoices>,
    private readonly buttonService
  ) {}

  async create(dto: CreateButtonInvoiceDto) {
    const button = await this.buttonService.findOne(dto.material_id)
    const data = {
      buttons: button,
      qty: dto.qty,
      dateArrived: dto.dateArrived
    }
    const invoice = await this.buttonInvoicesRepository.create(data);
    return await this.buttonInvoicesRepository.save(invoice);
  }

  async findAll(): Promise<ButtonInvoices[]> {
    return await this.buttonInvoicesRepository.find({
      order: {
        createdAt: 'ASC',
      }
    });
  }

  async findOne(id: string): Promise<ButtonInvoices> {
    const invoice = await this.buttonInvoicesRepository.findOne({
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
    await this.buttonInvoicesRepository.remove(invoice);
    return { status: true };
  }
}
