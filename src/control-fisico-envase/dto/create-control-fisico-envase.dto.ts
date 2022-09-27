import { ControlEnvase } from "src/control_envase/entities/control_envase.entity";
import { Producto } from "src/producto/entities/producto.entity";
import { TipoEnvase } from "src/tipo-envase/entities/tipo-envase.entity";

export class CreateControlFisicoEnvaseDto {

    fecha_cfe: Date;

    detalle_cfe: string;

    entrada_cfe: number;

    salida_cfe: number;

    saldo_cfe: number;  
    
    tipo_envase: TipoEnvase;

}
