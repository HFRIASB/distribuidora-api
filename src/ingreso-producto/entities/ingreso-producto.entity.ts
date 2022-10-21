import { Producto } from "src/producto/entities/producto.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class IngresoProducto {
    @PrimaryGeneratedColumn()
    id_ingreso_producto: number;

    @Column({ type: "varchar", length: 50 })
    chofer_ingreso_producto: string;

    @Column()
    fecha_ingreso_producto: Date;

    @Column()
    cantidad_ingreso_producto: number;

    @ManyToOne(() => Producto, (producto: Producto) => producto.ingresoProducto)
    producto: Producto;

}
