import { Injectable, NotFoundException } from '@nestjs/common';
import { JournalEntity } from './entities/journal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJournalDto } from './dto/create-journal.dto';
import { UpdateJournalDto } from './dto/update-journal.dto';
import { OrdersService } from 'src/orders/orders.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JournalService {
  constructor(
    @InjectRepository(JournalEntity)
    private readonly journalRepository: Repository<JournalEntity>,
    private readonly orderService: OrdersService,
    private readonly userService: UserService,
  ) {}

  async create(dto: CreateJournalDto) {
    const order = await this.orderService.findOne(dto.order_id);
    const user = await this.userService.findOne(dto.user_id);
    const journal = await this.journalRepository.create({
      type: dto.type,
      quantity: dto.quantity,
      user: user,
      order: order,
    });
    return await this.journalRepository.save(journal);
  }

  async findAll(): Promise<JournalEntity[]> {
    return await this.journalRepository.find({
      relations: {
        order: true,
        user: true,
      },
      order: {
        createdAt: 'ASC',
      },
    });
  }

  async findOne(id: string): Promise<JournalEntity> {
    const journal = await this.journalRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        order: true,
        user: true,
      },
    });
    if (!journal) {
      throw new NotFoundException();
    }
    return journal;
  }

  async update(id: string, dto: UpdateJournalDto): Promise<JournalEntity> {
    const journal = await this.findOne(id);
    Object.assign(journal, dto);
    return await this.journalRepository.save(journal);
  }

  async remove(id: string): Promise<{ status: boolean }> {
    const journal = await this.findOne(id);
    await this.journalRepository.remove(journal);
    return { status: true };
  }
}
