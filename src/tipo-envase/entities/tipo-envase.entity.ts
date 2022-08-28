
import { BaseEntity, Column, Entity,PrimaryGeneratedColumn } from "typeorm";


@Entity()

export class TipoEnvase extends BaseEntity{

    @PrimaryGeneratedColumn()
    id_envase: number;

    @Column({type: "varchar", length: 100, nullable: false})
    nombre_envase: string;

}
