import { Module } from '@nestjs/common';
import { MaterialConsumptionsService } from './material_consumptions.service';
import { MaterialConsumptionsController } from './material_consumptions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialConsumptionEntity } from './entities/material_consumption.entity';
import { OrdersModule } from 'src/orders/orders.module';


@Module({
  imports: [TypeOrmModule.forFeature([MaterialConsumptionEntity]),OrdersModule],
  controllers: [MaterialConsumptionsController],
  providers: [MaterialConsumptionsService],
})
export class MaterialConsumptionsModule {}
