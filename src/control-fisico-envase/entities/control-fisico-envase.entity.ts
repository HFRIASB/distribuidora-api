import { TipoEnvase } from "src/tipo-envase/entities/tipo-envase.entity";
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

    @ManyToOne(() => TipoEnvase, (tipo_envase: TipoEnvase) => tipo_envase.controlFisicoEnvase)
    tipo_envase: TipoEnvase;
}
