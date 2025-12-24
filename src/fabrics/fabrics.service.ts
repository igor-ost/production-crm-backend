import { Injectable, NotFoundException } from '@nestjs/common';
import { FabricEntity } from './entities/fabric.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFabricDto } from './dto/create-fabric.dto';
import { UpdateFabricDto } from './dto/update-fabric.dto';
import { Repository } from 'typeorm';

@Injectable()
export class FabricsService {
  constructor(@InjectRepository(FabricEntity) private readonly fabricsRepository: Repository<FabricEntity>){}

  async create(createFabricsDto: CreateFabricDto) {
    const fabric = await this.fabricsRepository.create(createFabricsDto);
    return await this.fabricsRepository.save(fabric);
  }

  async findAll(): Promise<FabricEntity[]> {
    return await this.fabricsRepository.find({
      order:{
        createdAt: "ASC"
      }
    });
  }

  async findOne(id: string): Promise<FabricEntity> {
    const fabric = await this.fabricsRepository.findOne({where: {
      id: id
    }})
    if(!fabric){
      throw new NotFoundException();
    }
    return fabric;
  }


  async update(id: string, updateFabricsDto: UpdateFabricDto): Promise<FabricEntity> {
    const fabric = await this.findOne(id);
    Object.assign(fabric,updateFabricsDto) 
    return await this.fabricsRepository.save(fabric);
  }
  
  async remove(id: string): Promise<{status: boolean}> {
      const fabric = await this.findOne(id)
      await this.fabricsRepository.remove(fabric);
      return {status: true};
  }
}
