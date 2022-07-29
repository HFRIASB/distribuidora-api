import { Orden } from "src/orden/entities/orden.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class ControlEnvase extends BaseEntity{

    @PrimaryGeneratedColumn()
    id_ce: number;

    @Column({type: "varchar", length: 10, default: "Bueno"})
    estado_ce: string;

    @Column({type: "varchar", length: 30})
    tipEnvase_ce: string;

    @Column({type: "decimal", precision: 10, scale: 2, default: 0})
    garantia_ce: number;

    @Column()
    cantEnvase_ce: number;
    
    @Column({type: "varchar", length: 50})
    motivo_ce: string;

    @ManyToOne(() => Orden, (orden: Orden) => orden.controlEnvase)
    orden: Orden;
 

}
  