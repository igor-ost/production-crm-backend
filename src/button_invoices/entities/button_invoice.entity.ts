
import { ButtonsEntity } from 'src/buttons/entities/buttons.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('button-invoices')
export class ButtonInvoices {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => ButtonsEntity, (button) => button.invoices, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'button_id' })
  button: ButtonsEntity;

  @Column({ type: 'varchar', length:40 })
  dateArrived: string;

  @Column({ type: 'int' })
  qty: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
