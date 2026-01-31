import { VelcroInvoices } from 'src/velcro_invoces/entities/velcro_invoice.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('velcro')
export class VelcroEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 40 })
  name: string;

  @Column({ type: 'varchar', length: 10 })
  unit: string;

  @Column({ type: 'int' })
  price: number;

  @OneToMany(()=>VelcroInvoices, (invoces)=>invoces.velcro)
  invoices: VelcroInvoices[]

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
