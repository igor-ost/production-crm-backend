import { Module } from '@nestjs/common';
import { OrderMaterialsService } from './order_materials.service';
import { OrderMaterialsController } from './order_materials.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderMaterialEntity } from './entities/order_material.entity';
import { OrdersModule } from 'src/orders/orders.module';

@Module({
  imports: [TypeOrmModule.forFeature([OrderMaterialEntity]), OrdersModule],
  controllers: [OrderMaterialsController],
  providers: [OrderMaterialsService],
})
export class OrderMaterialsModule {}
