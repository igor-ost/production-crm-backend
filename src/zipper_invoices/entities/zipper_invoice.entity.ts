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
  @JoinColumn({ name: 'zipper_id' })
  zippers: ZipperEntity;

  @Column({ type: 'varchar', length:40 })
  dateArrived: string;

  @Column({ type: 'int' })
  qty: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
