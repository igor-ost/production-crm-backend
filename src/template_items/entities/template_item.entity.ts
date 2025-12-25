import { TemplateEntity } from 'src/templates/entities/template.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('template-items')
export class TemplateItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => TemplateEntity, (template) => template.materials, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'template_id' })
  template: TemplateEntity;

  @Column({ name: 'material_id', type: 'uuid' })
  material_id: string;

  @Column({ name: 'material_type' })
  material_type:
    | 'accessories'
    | 'buttons'
    | 'zippers'
    | 'fabrics'
    | 'velcro'
    | 'threads';

  @Column({ type: 'int' })
  qty: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
