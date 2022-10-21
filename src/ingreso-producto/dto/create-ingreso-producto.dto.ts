import { Producto } from "src/producto/entities/producto.entity";

export class CreateIngresoProductoDto {
	chofer_ingreso_producto: string;

	fecha_ingreso_producto: Date;

	cantidad_ingreso_producto: number;

	producto: Producto;
}
