import { ControlEnvase } from "src/control_envase/entities/control_envase.entity";
import { Producto } from "src/producto/entities/producto.entity";

export class CreateControlFisicoEnvaseDto {

    fecha_cfe: Date;

    detalle_cfe: string;

    entrada_cfe: number;

    salida_cfe: number;

    saldo_cfe: number;  
    
    control_envase: ControlEnvase;

}
