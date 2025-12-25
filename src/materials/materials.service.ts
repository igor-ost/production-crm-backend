import { Injectable } from '@nestjs/common';
import { AccessoriesService } from 'src/accessories/accessories.service';
import { ButtonsService } from 'src/buttons/buttons.service';
import { FabricsService } from 'src/fabrics/fabrics.service';
import { ThreadsService } from 'src/threads/threads.service';
import { VelcroService } from 'src/velcro/velcro.service';
import { ZippersService } from 'src/zippers/zippers.service';

@Injectable()
export class MaterialsService {
  constructor(
    private readonly accessoriesService: AccessoriesService,
    private readonly buttonsService: ButtonsService,
    private readonly fabricsService: FabricsService,
    private readonly threadsService: ThreadsService,
    private readonly velcroService: VelcroService,
    private readonly zippersService: ZippersService,
  ) {}
  async findAll() {
    const accessoriesList = await this.accessoriesService.findAll();
    const buttonsList = await this.buttonsService.findAll();
    const fabricsList = await this.fabricsService.findAll();
    const threadsList = await this.threadsService.findAll();
    const velcroList = await this.velcroService.findAll();
    const zippersList = await this.zippersService.findAll();
    return {
      accessories: accessoriesList,
      buttons: buttonsList,
      fabrics: fabricsList,
      threads: threadsList,
      velcro: velcroList,
      zippers: zippersList,
    };
  }
}
