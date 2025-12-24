import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRole } from "../dto/create-user.dto";

@Entity({name: "users"})
export class UserEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type:"varchar",length: 40})
    login: string;

    @Column({select:false,type: "text"})
    password: string;

    @Column({type:"enum",enum:UserRole})
    role:UserRole;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
