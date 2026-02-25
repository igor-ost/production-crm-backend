import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserRole } from '../dto/create-user.dto';
import { JournalEntity } from 'src/journal/entities/journal.entity';
import { OrderStaffEntity } from 'src/order_staffs/entities/order_staff.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 40 })
  login: string;

  @Column({ select: false, type: 'text' })
  password: string;

  @Column({ type: 'enum', enum: UserRole })
  role: UserRole;

  @OneToMany(() => JournalEntity, (journal) => journal.user)
  journal?: JournalEntity[];

  @OneToOne(() => OrderStaffEntity, (orderStaff) => orderStaff.order)
  orders?: OrderStaffEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
