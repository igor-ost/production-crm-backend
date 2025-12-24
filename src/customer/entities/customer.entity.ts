import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "customers"})
export class CustomerEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column({type:"text"})
    name: string;
    
    @Column({type: "varchar",length:40, nullable: true})
    bin: string;
    
    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
}
