
import { ControlFisicoEnvase } from "src/control-fisico-envase/entities/control-fisico-envase.entity";
import { BaseEntity, Column, Entity,OneToMany,PrimaryGeneratedColumn } from "typeorm";


@Entity()

export class TipoEnvase extends BaseEntity{

    @PrimaryGeneratedColumn()
    id_envase: number;

    @Column({type: "varchar", length: 100, nullable: false})
    nombre_envase: string;

    @OneToMany(() => ControlFisicoEnvase, (controlFisicoEnvase: ControlFisicoEnvase) => controlFisicoEnvase.tipo_envase)
    controlFisicoEnvase: ControlFisicoEnvase[];
}
