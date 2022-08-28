import { Usuario } from "src/usuario/entities/usuario.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Pago extends BaseEntity{
    @PrimaryGeneratedColumn()
    id_pago: number;

    @Column({type: "decimal", precision: 10, scale: 2, default: 0})
    cantidad_pago: number;

    @Column()
    fecha_pago: Date;

    @ManyToOne(() => Usuario, (usuario: Usuario) => usuario.pago)
    usuario: Usuario;
}
