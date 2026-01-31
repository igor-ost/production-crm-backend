import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { getTypeORMConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
import { ZippersModule } from './zippers/zippers.module';
import { AccessoriesModule } from './accessories/accessories.module';
import { ButtonsModule } from './buttons/buttons.module';
import { FabricsModule } from './fabrics/fabrics.module';
import { ThreadsModule } from './threads/threads.module';
import { VelcroModule } from './velcro/velcro.module';
import { MaterialsModule } from './materials/materials.module';
import { TemplatesModule } from './templates/templates.module';
import { TemplateItemsModule } from './template_items/template_items.module';
import { OrdersModule } from './orders/orders.module';
import { PhotosModule } from './photos/photos.module';
import { OrderMaterialsModule } from './order_materials/order_materials.module';
import { JournalModule } from './journal/journal.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { OrderStaffsModule } from './order_staffs/order_staffs.module';
import { ZipperInvoicesModule } from './zipper_invoices/zipper_invoices.module';
import { VelcroInvoicesModule } from './velcro_invoces/velcro_invoices.module';
import { ThreadInvoicesModule } from './thread_invoices/thread_invoices.module';
import { FabricInvoicesModule } from './fabric_invoices/fabric_invoices.module';
import { ButtonInvoicesModule } from './button_invoices/button_invoices.module';
import { AccessoriesInvoicesModule } from './accessories_invoices/accessories_invoices.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getTypeORMConfig,
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
    CustomerModule,
    ZippersModule,
    AccessoriesModule,
    ButtonsModule,
    FabricsModule,
    ThreadsModule,
    VelcroModule,
    MaterialsModule,
    TemplatesModule,
    TemplateItemsModule,
    OrdersModule,
    PhotosModule,
    OrderMaterialsModule,
    JournalModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    OrderStaffsModule,
    ZipperInvoicesModule,
    VelcroInvoicesModule,
    ThreadInvoicesModule,
    FabricInvoicesModule,
    ButtonInvoicesModule,
    AccessoriesInvoicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
