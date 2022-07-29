import { Orden } from "src/orden/entities/orden.entity";
import { Producto } from "src/producto/entities/producto.entity";

export class CreateOrdenProductoDto {

    cantidad_op: number;

    precioUni_op: number;

    descProducto_op: number;

    orden: Orden;
    
    producto: Producto;

}
