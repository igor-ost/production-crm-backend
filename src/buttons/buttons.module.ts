import { Module } from '@nestjs/common';
import { ButtonsService } from './buttons.service';
import { ButtonsController } from './buttons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ButtonsEntity } from './entities/buttons.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ButtonsEntity])],
  controllers: [ButtonsController],
  providers: [ButtonsService],
  exports: [ButtonsService],
})
export class ButtonsModule {}
