import { CarteraCliente } from "src/cartera_cliente/entities/cartera_cliente.entity";
import { Direccion } from "src/direccion/entities/direccion.entity";
import { Orden } from "src/orden/entities/orden.entity";
import { Pago } from "src/pago/entities/pago.entity";
import { Rol } from "src/rol/entities/rol.entity";

export class CreateUsuarioDto {

    nombre_usu: string;

    nroDocu_usu: string;

    sexo_usu: string;

    celular_usu: string;

    fRegistro_usu: Date;

    estado_usu: string;

    correo_usu: string;

    password_usu: string;

    observacion_usu: string;

    deuda_usu: number;

    rol: Rol;

    direccion: Direccion[];

    orden: Orden[];

    pago: Pago[];

    cartera_cliente?: CarteraCliente;
}
