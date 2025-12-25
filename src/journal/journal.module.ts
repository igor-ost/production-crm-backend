import { Module } from '@nestjs/common';
import { JournalService } from './journal.service';
import { JournalController } from './journal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JournalEntity } from './entities/journal.entity';
import { UserModule } from 'src/user/user.module';
import { OrdersModule } from 'src/orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([JournalEntity]),
    UserModule,
    OrdersModule,
  ],
  controllers: [JournalController],
  providers: [JournalService],
})
export class JournalModule {}
