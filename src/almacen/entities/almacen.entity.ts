import { Producto } from "src/producto/entities/producto.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Almacen extends BaseEntity{

    @PrimaryGeneratedColumn()
    id_almacen: number;

    @Column({type: "varchar", length: 50})
    chofer_almacen: string;

    @Column()
    fecha_almacen: Date;
    
    @Column({type: "varchar", length: 50})
    tipo_almacen: string;//Producto o envase

    @Column()
    cantidad_almacen: number;

    @Column({type: "varchar", length: 50})
    item_almacen: string;

    @Column()
    estado_almacen: string;//Ingreso o despacho
}
