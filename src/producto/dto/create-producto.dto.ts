import { Orden } from "src/orden/entities/orden.entity";
import { OrdenProducto } from "src/orden_producto/entities/orden_producto.entity";

export class CreateProductoDto {

    nombre_prod: string;

    foto_prod: string;

    stock_prod: number;

    precioCompra_prod: number;

    estado_prod: string;

    uniMedida_prod: string;

    ordenProducto: OrdenProducto[];
}
