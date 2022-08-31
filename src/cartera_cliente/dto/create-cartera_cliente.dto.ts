import { Usuario } from "src/usuario/entities/usuario.entity";

export class CreateCarteraClienteDto {

    id_cc: number;

    id_vendedor: number;

    id_cliente: Usuario;

}
