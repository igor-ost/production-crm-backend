import { ZipperEntity } from 'src/zippers/entities/zipper.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('zipper-invoices')
export class ZipperInvoices {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => ZipperEntity, (zipper) => zipper.invoices, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id' })
  zippers: ZipperEntity;

  @Column({ type: 'date' })
  dateArrived: Date;

  @Column({ type: 'int' })
  qty: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
