import { Orden } from "src/orden/entities/orden.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";

export class CreateControlEnvaseDto {

    estado_ce: string;

    tipEnvase_ce: string;

    garantia_ce: number;

    cantEnvase_ce: number;

    motivo_ce: string;

    fecha_ce: Date;

    usuario: Usuario;

    orden: Orden;
}
