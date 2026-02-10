import { ZipperInvoices } from 'src/zipper_invoices/entities/zipper_invoice.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('zippers')
export class ZipperEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 40 })
  color: string;

  @Column({ type: 'varchar', length: 40 })
  type: string;

  @Column({ type: 'varchar', length: 10 })
  unit: string;

  @OneToMany(() => ZipperInvoices, (invoices) => invoices.zippers)
  invoices: ZipperInvoices[]

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
