import { ControlEnvase } from "src/control_envase/entities/control_envase.entity";
import { Direccion } from "src/direccion/entities/direccion.entity";
import { OrdenProducto } from "src/orden_producto/entities/orden_producto.entity";
import { Producto } from "src/producto/entities/producto.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";

export class CreateOrdenDto {

    fVenta_ord: Date;

    fEntrega_ord: Date;

    estado_ord: string;

    numNota_ord: string;

    url_ord: string;

    descGeneral_ord: number;

    usuario: Usuario;

    direccion: Direccion;

    controlEnvase: ControlEnvase[];

    ordenProducto: OrdenProducto[];
}
