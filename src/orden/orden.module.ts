import { Module } from '@nestjs/common';
import { OrdenService } from './orden.service';
import { OrdenController } from './orden.controller';
import { Orden } from './entities/orden.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Direccion } from 'src/direccion/entities/direccion.entity';
import { Producto } from 'src/producto/entities/producto.entity';
import { ControlEnvase } from 'src/control_envase/entities/control_envase.entity';
import { CarteraCliente } from 'src/cartera_cliente/entities/cartera_cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Orden,Usuario,Direccion,ControlEnvase, CarteraCliente])],
  controllers: [OrdenController],
  providers: [OrdenService]
})
export class OrdenModule {}
