
import { ControlFisicoEnvase } from "src/control-fisico-envase/entities/control-fisico-envase.entity";
import { ControlEnvase } from "src/control_envase/entities/control_envase.entity";
import { BaseEntity, Column, Entity,OneToMany,PrimaryGeneratedColumn } from "typeorm";


@Entity()

export class TipoEnvase extends BaseEntity{

    @PrimaryGeneratedColumn()
    id_envase: number;

    @Column({type: "varchar", length: 100, nullable: false})
    nombre_envase: string;

    @Column({type: "decimal", precision: 10, scale: 2, default: 0})
    precio_envase: number;

    @OneToMany(() => ControlFisicoEnvase, (controlFisicoEnvase: ControlFisicoEnvase) => controlFisicoEnvase.tipo_envase)
    controlFisicoEnvase: ControlFisicoEnvase[];

    @OneToMany(() => ControlEnvase, (controlEnvase: ControlEnvase) => controlEnvase.tipoEnvase)
    controlEnvase: ControlEnvase[];
}
