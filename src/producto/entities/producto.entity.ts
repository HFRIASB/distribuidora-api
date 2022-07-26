import { Almacen } from "src/almacen/entities/almacen.entity";
import { ControlFisicoProducto } from "src/control-fisico-producto/entities/control-fisico-producto.entity";
import { IngresoProducto } from "src/ingreso-producto/entities/ingreso-producto.entity";
import { Orden } from "src/orden/entities/orden.entity";
import { OrdenProducto } from "src/orden_producto/entities/orden_producto.entity";
import { BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Producto extends BaseEntity{

    @PrimaryGeneratedColumn()
    id_prod: number;

    @Column({type: "varchar", length: 40})
    nombre_prod: string;

    @Column({type: "varchar", length: 350})
    foto_prod: string;

    @Column({default: 0})
    stock_prod: number;

    @Column({type: "decimal", precision: 10, scale: 2, default: 0})
    precioCompra_prod: number;

    @Column({type: "varchar", length: 30, default: "Activo"})
    estado_prod: string;

    @Column({type: "varchar", length: 30})
    uniMedida_prod: string;

    @OneToMany(() => OrdenProducto, (ordenProducto: OrdenProducto) =>ordenProducto.producto)
    ordenProducto: OrdenProducto[];

    @OneToMany(() => ControlFisicoProducto, (controlFisicoProducto: ControlFisicoProducto) => controlFisicoProducto.producto)
    controlFisicoProducto: ControlFisicoProducto[];

    @OneToMany(() => IngresoProducto, (ingresoProducto: IngresoProducto) =>ingresoProducto.producto)
    ingresoProducto: IngresoProducto[];

}
