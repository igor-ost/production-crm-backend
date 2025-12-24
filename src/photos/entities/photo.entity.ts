import { OrderEntity } from "src/orders/entities/order.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("photos")
export class PhotoEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type:"text"})
    src: string

    @ManyToOne(() => OrderEntity, order => order.photos, {
        onDelete: "CASCADE"
    })
    @JoinColumn({ name: "order_id" })
    order: OrderEntity;

}
