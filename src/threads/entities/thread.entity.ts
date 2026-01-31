import { ThreadInvoice } from 'src/thread_invoices/entities/thread_invoice.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('threads')
export class ThreadEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 40 })
  color: string;

  @Column({ type: 'varchar', length: 40 })
  type: string;

  @Column({ type: 'varchar', length: 10 })
  unit: string;

  @Column({ type: 'int' })
  price: number;

  @OneToMany(() => ThreadInvoice, (invoices) => invoices.thread)
  invoices: ThreadInvoice[]

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
