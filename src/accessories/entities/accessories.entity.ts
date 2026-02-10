import { AccessoriesInvoice } from 'src/accessories_invoices/entities/accessories_invoice.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('accessories')
export class AccessoriesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 40 })
  name: string;

  @Column({ type: 'varchar', length: 10 })
  unit: string;

  @OneToMany(() => AccessoriesInvoice, (invoices) => invoices.accessories)
  invoices: AccessoriesInvoice[]

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
