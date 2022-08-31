import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Rol } from 'src/rol/entities/rol.entity';
import { Direccion } from 'src/direccion/entities/direccion.entity';
import { Orden } from 'src/orden/entities/orden.entity';
import { Pago } from 'src/pago/entities/pago.entity';
import { CarteraCliente } from 'src/cartera_cliente/entities/cartera_cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Rol, Direccion, Orden, Pago, CarteraCliente])],
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [UsuarioService]
})
export class UsuarioModule {}
