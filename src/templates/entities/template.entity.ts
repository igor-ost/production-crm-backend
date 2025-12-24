import { TemplateItemEntity } from "src/template_items/entities/template_item.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("templates")
export class TemplateEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type:"text"})
    name: string;

    @Column({type:"text"})
    description: string

    @OneToMany(()=> TemplateItemEntity, (item) => item.template)
    materials: TemplateItemEntity[]

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
}
