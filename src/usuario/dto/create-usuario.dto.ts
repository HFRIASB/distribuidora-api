import { Direccion } from "src/direccion/entities/direccion.entity";
import { Orden } from "src/orden/entities/orden.entity";
import { Rol } from "src/rol/entities/rol.entity";

export class CreateUsuarioDto {

    nombre_usu: string;

    apPaterno_usu: string;

    apMaterno_usu: string;

    nroDocu_usu: string;

    sexo_usu: string;

    celular_usu: string;

    fRegistro_usu: Date;

    estado_usu: string;

    usuario_usu: string;

    correo_usu: string;

    password_usu: string;

    observacion_usu: string;

    rol: Rol;

    direccion: Direccion[];

    orden: Orden[];
}
