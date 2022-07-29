import { Usuario } from "src/usuario/entities/usuario.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Rol extends BaseEntity{

    @PrimaryGeneratedColumn()
    id_rol: number;

    @Column({type: "varchar", length: 30})
    nombre_rol: string;

    @Column()
    fRegistro_rol: Date;

    @Column({type: "varchar", length: 30, default: "Activo"})
    estado_rol: string;

    @OneToMany(() => Usuario, (usuario: Usuario) => usuario.rol)
    usuario: Usuario[];
}
