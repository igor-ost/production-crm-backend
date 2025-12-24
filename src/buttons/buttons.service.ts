import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ButtonsEntity } from './entities/buttons.entity';
import { CreateButtonsDto } from './dto/create-buttons.dto';
import { UpdateButtonsDto } from './dto/update-buttons.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ButtonsService {
  constructor(@InjectRepository(ButtonsEntity) private readonly buttonsRepository: Repository<ButtonsEntity>){}

  async create(createButtonsDto: CreateButtonsDto) {
    const button = await this.buttonsRepository.create(createButtonsDto);
    return await this.buttonsRepository.save(button);
  }

  async findAll(): Promise<ButtonsEntity[]> {
    return await this.buttonsRepository.find({
      order:{
        createdAt: "ASC"
      }
    });
  }

  async findOne(id: string): Promise<ButtonsEntity> {
    const button = await this.buttonsRepository.findOne({where: {
      id: id
    }})
    if(!button){
      throw new NotFoundException();
    }
    return button;
  }


  async update(id: string, updateButtonsDto: UpdateButtonsDto): Promise<ButtonsEntity> {
    const button = await this.findOne(id);
    Object.assign(button,updateButtonsDto) 
    return await this.buttonsRepository.save(button);
  }
  
  async remove(id: string): Promise<{status: boolean}> {
      const button = await this.findOne(id)
      await this.buttonsRepository.remove(button);
      return {status: true};
  }
}
