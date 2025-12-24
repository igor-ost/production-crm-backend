import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VelcroEntity } from './entities/velcro.entity';
import { CreateVelcroDto } from './dto/create-velcro.dto';
import { Repository } from 'typeorm';
import { UpdateVelcroDto } from './dto/update-velcro.dto';

@Injectable()
export class VelcroService {
  constructor(@InjectRepository(VelcroEntity) private readonly velcroRepository: Repository<VelcroEntity>){}

  async create(createVelcroDto: CreateVelcroDto) {
    const velcro = await this.velcroRepository.create(createVelcroDto);
    return await this.velcroRepository.save(velcro);
  }

  async findAll(): Promise<VelcroEntity[]> {
    return await this.velcroRepository.find({
      order:{
        createdAt: "ASC"
      }
    });
  }

  async findOne(id: string): Promise<VelcroEntity> {
    const velcro = await this.velcroRepository.findOne({where: {
      id: id
    }})
    if(!velcro){
      throw new NotFoundException();
    }
    return velcro;
  }


  async update(id: string, updateVelcroDto: UpdateVelcroDto): Promise<VelcroEntity> {
    const velcro = await this.findOne(id);
    Object.assign(velcro,updateVelcroDto) 
    return await this.velcroRepository.save(velcro);
  }
  
  async remove(id: string): Promise<{status: boolean}> {
      const velcro = await this.findOne(id)
      await this.velcroRepository.remove(velcro);
      return {status: true};
  }
}
