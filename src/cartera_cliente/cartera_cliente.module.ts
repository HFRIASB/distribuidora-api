import { Module } from '@nestjs/common';
import { CarteraClienteService } from './cartera_cliente.service';
import { CarteraClienteController } from './cartera_cliente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarteraCliente } from './entities/cartera_cliente.entity';
import { UsuarioService } from 'src/usuario/usuario.service';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarteraCliente, Usuario])],
  controllers: [CarteraClienteController],
  providers: [CarteraClienteService]
})
export class CarteraClienteModule {}
