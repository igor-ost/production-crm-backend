import { FabricInvoices } from 'src/fabric_invoices/entities/fabric_invoice.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('fabrics')
export class FabricEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 40 })
  name: string;

  @Column({ type: 'varchar', length: 40 })
  color: string;

  @Column({ type: 'varchar', length: 10 })
  unit: string;

  @OneToMany(() => FabricInvoices, (invoices) => invoices.fabric)
  invoices: FabricInvoices[]

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
