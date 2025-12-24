import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ThreadEntity } from './entities/thread.entity';
import { Repository } from 'typeorm';
import { CreateThreadDto } from './dto/create-thread.dto';
import { UpdateThreadDto } from './dto/update-thread.dto';

@Injectable()
export class ThreadsService {
  constructor(@InjectRepository(ThreadEntity) private readonly threadsRepository: Repository<ThreadEntity>){}

  async create(createThreadsDto: CreateThreadDto) {
    const thread = await this.threadsRepository.create(createThreadsDto);
    return await this.threadsRepository.save(thread);
  }

  async findAll(): Promise<ThreadEntity[]> {
    return await this.threadsRepository.find({
      order:{
        createdAt: "ASC"
      }
    });
  }

  async findOne(id: string): Promise<ThreadEntity> {
    const thread = await this.threadsRepository.findOne({where: {
      id: id
    }})
    if(!thread){
      throw new NotFoundException();
    }
    return thread;
  }


  async update(id: string, updateThreadsDto: UpdateThreadDto): Promise<ThreadEntity> {
    const thread = await this.findOne(id);
    Object.assign(thread,updateThreadsDto) 
    return await this.threadsRepository.save(thread);
  }
  
  async remove(id: string): Promise<{status: boolean}> {
      const thread = await this.findOne(id)
      await this.threadsRepository.remove(thread);
      return {status: true};
  }
}
