import { ThreadEntity } from 'src/threads/entities/thread.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity("thread-invoices")
export class ThreadInvoice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => ThreadEntity, (thread) => thread.invoices, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'thread_id' })
  threads: ThreadEntity;

  @Column({ type: 'varchar', length:40 })
  dateArrived: string;

  @Column({ type: 'int' })
  qty: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

