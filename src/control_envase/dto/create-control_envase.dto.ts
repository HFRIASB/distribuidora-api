import { Orden } from "src/orden/entities/orden.entity";
import { TipoEnvase } from "src/tipo-envase/entities/tipo-envase.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";

export class CreateControlEnvaseDto {

    estado_ce: string;

    garantia_ce: number;

    cantEnvase_ce: number;

    motivo_ce: string;

    fecha_ce: Date;

    tipoEnvase:  TipoEnvase;

    usuario: Usuario;

    orden: Orden;
}
