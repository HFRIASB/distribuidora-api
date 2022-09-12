import { Producto } from "src/producto/entities/producto.entity";

export class CreateAlmacenDto {

    id_almacen: number;

    chofer_almacen: string;

    fecha_almacen: Date;

    tipo_almacen: string;

    item_almacen: string;

    estado_almacen: string;
}
