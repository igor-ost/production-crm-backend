
import { OrderEntity } from 'src/orders/entities/order.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('material-consumptions')
export class MaterialConsumptionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'material_id', type: 'uuid' })
  material_id: string;

  @Column({ name: 'material_type' })
  material_type:
    | 'accessories'
    | 'buttons'
    | 'zippers'
    | 'fabrics'
    | 'velcro'
    | 'threads';

  @ManyToOne(() => OrderEntity, (order) => order.materials, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;

  @Column('decimal', { precision: 10, scale: 3 })
  qty: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
