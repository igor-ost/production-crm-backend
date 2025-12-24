import { Module } from '@nestjs/common';
import { TemplateItemsService } from './template_items.service';
import { TemplateItemsController } from './template_items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemplatesModule } from 'src/templates/templates.module';
import { TemplateItemEntity } from './entities/template_item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TemplateItemEntity]),TemplatesModule],
  controllers: [TemplateItemsController],
  providers: [TemplateItemsService],
})
export class TemplateItemsModule {}
