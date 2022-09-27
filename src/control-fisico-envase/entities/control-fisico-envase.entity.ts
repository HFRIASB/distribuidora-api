import { ControlEnvase } from "src/control_envase/entities/control_envase.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class ControlFisicoEnvase extends BaseEntity{

    @PrimaryGeneratedColumn()
    id_cfe: number;

    @Column()
    fecha_cfe: Date;

    @Column({type: "varchar", length: 50})
    detalle_cfe: string;

    @Column()
    entrada_cfe: number;

    @Column()
    salida_cfe: number;

    @Column()
    saldo_cfe: number;

    @ManyToOne(() => ControlEnvase, (control_envase: ControlEnvase) => control_envase.controlFisicoEnvase)
    control_envase: ControlEnvase;
}
