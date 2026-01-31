import { FabricEntity } from 'src/fabrics/entities/fabric.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('fabric-invoices')
export class FabricInvoices {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => FabricEntity, (fabric) => fabric.invoices, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'fabric_id' })
  fabric: FabricEntity;

  @Column({ type: 'varchar', length:40 })
  dateArrived: string;

  @Column({ type: 'int' })
  qty: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
