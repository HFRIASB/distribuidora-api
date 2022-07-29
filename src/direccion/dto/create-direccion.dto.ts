import { Usuario } from "src/usuario/entities/usuario.entity";
import { Direccion } from "../entities/direccion.entity";

export class CreateDireccionDto {
    
    id_direc: number;

    nombre_direc: string;

    lat_direc: string;

    lng_direc: string;

    rubro_direc: string;

    telefono_direc: string;

    usuario: Usuario;

    direccion: Direccion;
}
