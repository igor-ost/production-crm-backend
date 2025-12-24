import { Module } from '@nestjs/common';
import { VelcroService } from './velcro.service';
import { VelcroController } from './velcro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VelcroEntity } from './entities/velcro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VelcroEntity])],
  controllers: [VelcroController],
  providers: [VelcroService],
  exports: [VelcroService],
})
export class VelcroModule {}
