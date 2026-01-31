import { VelcroEntity } from 'src/velcro/entities/velcro.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('velcro-invoices')
export class VelcroInvoices {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => VelcroEntity, (velcro) => velcro.invoices, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'velcro_id' })
  velcro: VelcroEntity;

  @Column({ type: 'varchar', length:40 })
  dateArrived: string;

  @Column({ type: 'int' })
  qty: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
