import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity("accessories")
export class AccessoriesEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type:"varchar",length:40})
    name: string

    @Column({type:"varchar",length:10})
    unit: string

    @Column({type:"int"})
    price: number

    @Column({type:"int"})
    qty: number

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
