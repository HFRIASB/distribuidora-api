import { Producto } from "src/producto/entities/producto.entity";

export class CreateControlFisicoProductoDto {

    fecha_cfp: Date;

    detalle_cfp: string;

    entrada_cfp: number;

    salida_cfp: number;

    saldo_cfp: number;  
    
    producto: Producto;

}
