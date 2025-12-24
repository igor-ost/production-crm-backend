import { CustomerEntity } from "src/customer/entities/customer.entity";
import { OrderMaterialEntity } from "src/order_materials/entities/order_material.entity";
import { PhotoEntity } from "src/photos/entities/photo.entity";
import { TemplateEntity } from "src/templates/entities/template.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("orders")
export class OrderEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    order_number: string

    @ManyToOne(() => CustomerEntity, { eager: false, onDelete: "RESTRICT" })
    @JoinColumn({ name: "customer_id" })
    customer: CustomerEntity;

    @ManyToOne(() => TemplateEntity, { eager: false, onDelete: "RESTRICT" })
    @JoinColumn({ name: "template_id" })
    template: TemplateEntity;

    @OneToMany(() => OrderMaterialEntity, material => material.order)
    materials: OrderMaterialEntity[];

    @OneToMany(() => PhotoEntity, photo => photo.order)
    photos: PhotoEntity[];

    @Column()
    size: string

    @Column()
    status: string

    @Column("decimal")
    sewing_price: number;

    @Column("decimal")
    cutting_price: number;

    @Column()
    quantity: number;

    @Column()
    buttons: number;

    @Column({ type: "text", nullable: true })
    notes: string;

    @CreateDateColumn()
    createdAt: Date;
        
    @UpdateDateColumn()
    updatedAt: Date;
}
