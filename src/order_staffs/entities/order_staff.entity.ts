import { OrderEntity } from "src/orders/entities/order.entity";
import { UserEntity } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("order-staffs")
export class OrderStaffEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ name: 'staff_id', type: 'uuid' })
    staff_id: string;

    @Column({ name: 'order_id', type: 'uuid' })
    order_id: string;

    @OneToOne(()=>UserEntity, (user)=>user.orders)
    @JoinColumn({ name: 'id' })
    user: UserEntity;

    @ManyToOne(() => OrderEntity, (order) => order.staffs, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'order_id' })
    order: OrderEntity;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
}
