import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerEntity } from './entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly zipperRepository: Repository<CustomerEntity>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const customer = await this.zipperRepository.create(createCustomerDto);
    return await this.zipperRepository.save(customer);
  }

  async findAll(): Promise<CustomerEntity[]> {
    return await this.zipperRepository.find({
      relations: {
        orders: {
          template: true,
          customer: true,
        },
      },
      order: {
        createdAt: 'ASC',
      },
    });
  }

  async findOne(id: string): Promise<CustomerEntity> {
    const customer = await this.zipperRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!customer) {
      throw new NotFoundException();
    }
    return customer;
  }

  async update(
    id: string,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<CustomerEntity> {
    const customer = await this.findOne(id);
    Object.assign(customer, updateCustomerDto);
    return await this.zipperRepository.save(customer);
  }

  async remove(id: string): Promise<{ status: boolean }> {
    const customer = await this.findOne(id);
    await this.zipperRepository.remove(customer);
    return { status: true };
  }
}
