import { Usuario } from "src/usuario/entities/usuario.entity";

export class CreatePagoDto {

    cantidad_pago: number;

    fecha_pago: Date;

    usuario: Usuario;
}
