import { OrderEntity } from "src/orders/entities/order.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "customers"})
export class CustomerEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column({type:"text"})
    name: string;
    
    @Column({type: "varchar",length:40, nullable: true})
    bin: string;

    @OneToMany(() => OrderEntity, (order) => order.customer)
    orders: OrderEntity[];
    
    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
}
