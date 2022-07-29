import { Usuario } from "src/usuario/entities/usuario.entity";

export class CreateRolDto {

    id_rol: number;

    nombre_rol: string;

    fRegistro_rol: Date;

    estado_rol: string;
    
    usuario:Usuario[];
}
