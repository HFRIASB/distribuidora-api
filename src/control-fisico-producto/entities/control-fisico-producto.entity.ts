import { Producto } from "src/producto/entities/producto.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class ControlFisicoProducto extends BaseEntity{

    @PrimaryGeneratedColumn()
    id_cfp: number;

    @Column()
    fecha_cfp: Date;

    @Column({type: "varchar", length: 50})
    detalle_cfp: string;

    @Column()
    entrada_cfp: number;

    @Column()
    salida_cfp: number;

    @Column()
    saldo_cfp: number;

    @ManyToOne(() => Producto, (producto: Producto) => producto.controlFisicoProducto)
    producto: Producto;
}
