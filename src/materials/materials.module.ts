import { Module } from '@nestjs/common';
import { MaterialsService } from './materials.service';
import { MaterialsController } from './materials.controller';
import { AccessoriesModule } from 'src/accessories/accessories.module';
import { ButtonsModule } from 'src/buttons/buttons.module';
import { FabricsModule } from 'src/fabrics/fabrics.module';
import { ThreadsModule } from 'src/threads/threads.module';
import { VelcroModule } from 'src/velcro/velcro.module';
import { ZippersModule } from 'src/zippers/zippers.module';

@Module({
  imports: [
    AccessoriesModule,
    ButtonsModule,
    FabricsModule,
    ThreadsModule,
    VelcroModule,
    ZippersModule,
  ],
  controllers: [MaterialsController],
  providers: [MaterialsService],
})
export class MaterialsModule {}
