import { AccessoriesEntity } from 'src/accessories/entities/accessories.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('accessories-invoices')
export class AccessoriesInvoice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => AccessoriesEntity, (accessories) => accessories.invoices, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id' })
  accessories: AccessoriesEntity;

  @Column({ type: 'date' })
  dateArrived: Date;

  @Column({ type: 'int' })
  qty: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
