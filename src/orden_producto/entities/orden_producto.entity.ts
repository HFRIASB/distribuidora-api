import { Orden } from "src/orden/entities/orden.entity";
import { Producto } from "src/producto/entities/producto.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class OrdenProducto  extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id_op: number;

    @Column()
    cantidad_op: number;

    @Column({type: "decimal", precision: 10, scale: 2, default: 0})
    precioUni_op: number;

    @Column({type: "decimal", precision: 10, scale: 2, default: 0})
    descProducto_op: number;

    @ManyToOne(() => Orden, (orden: Orden) => orden.ordenProducto)
    orden: Orden;
    
    @ManyToOne(() => Producto, (producto: Producto) => producto.ordenProducto)
    producto: Producto;

}
