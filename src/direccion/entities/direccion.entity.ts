import { Orden } from "src/orden/entities/orden.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Direccion  extends BaseEntity{

    @PrimaryGeneratedColumn()
    id_direc: number;

    @Column({type: "varchar", length: 30})
    nombre_direc: string;

    @Column({type: "varchar", length: 300})
    descripcion_direc: string;

    @Column()//varchar 10
    lat_direc: string;

    @Column()//varchar 10
    lng_direc: string;

    @Column({type: "varchar", length: 30})
    rubro_direc: string;

    @Column({type: "varchar", length: 10})
    telefono_direc: string;

    @ManyToOne(() => Usuario, (usuario: Usuario) => usuario.direccion)
    usuario: Usuario;

    @OneToMany(() => Orden, (orden: Orden) => orden.direccion)
    orden: Orden[];
}
