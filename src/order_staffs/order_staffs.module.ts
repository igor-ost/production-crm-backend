import { Module } from '@nestjs/common';
import { OrderStaffsService } from './order_staffs.service';
import { OrderStaffsController } from './order_staffs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderStaffEntity } from './entities/order_staff.entity';
import { UserModule } from 'src/user/user.module';
import { OrdersModule } from 'src/orders/orders.module';

@Module({
  imports: [TypeOrmModule.forFeature([OrderStaffEntity]),UserModule,OrdersModule],
  controllers: [OrderStaffsController],
  providers: [OrderStaffsService],
})
export class OrderStaffsModule {}
