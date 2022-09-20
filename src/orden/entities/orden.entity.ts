import { ControlEnvase } from "src/control_envase/entities/control_envase.entity";
import { Direccion } from "src/direccion/entities/direccion.entity";
import { OrdenProducto } from "src/orden_producto/entities/orden_producto.entity";
import { Producto } from "src/producto/entities/producto.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Orden extends BaseEntity{

    @PrimaryGeneratedColumn()
    id_ord: number;

    @Column()
    fVenta_ord: Date;

    @Column()
    fEntrega_ord: Date;

    @Column({type: "varchar", length: 30, default: "Pendiente"})
    estado_ord: string;

    @Column({type: "varchar", length: 10, nullable: true})
    numNota_ord: string;

    @Column({nullable: true})
    url_ord: string;

    @Column({default: 0})
    descGeneral_ord: number;

    @Column({type: "decimal", precision: 10, scale: 2, default: 0})
    total_ord: number;


    @ManyToOne(() => Usuario, (usuario: Usuario) => usuario.orden)
    usuario: Usuario;

    @ManyToOne(() => Direccion, (direccion: Direccion) => direccion.orden)
    direccion: Direccion;

    @OneToMany(() => OrdenProducto, (ordenProducto: OrdenProducto) =>ordenProducto.orden)
    ordenProducto: OrdenProducto[];

}
