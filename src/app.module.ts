import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoModule } from './producto/producto.module';
import { Producto } from './producto/entities/producto.entity';
import { RolModule } from './rol/rol.module';
import { Rol } from './rol/entities/rol.entity';
import { DireccionModule } from './direccion/direccion.module';
import { Direccion } from './direccion/entities/direccion.entity';
import { OrdenModule } from './orden/orden.module';
import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { Orden } from './orden/entities/orden.entity';
import { CarteraClienteModule } from './cartera_cliente/cartera_cliente.module';
import { CarteraCliente } from './cartera_cliente/entities/cartera_cliente.entity';
import { ControlEnvaseModule } from './control_envase/control_envase.module';
import { ControlEnvase } from './control_envase/entities/control_envase.entity';
import { OrdenProductoModule } from './orden_producto/orden_producto.module';
import { OrdenProducto } from './orden_producto/entities/orden_producto.entity';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'distribuidora-api',
      //entities: ['dist//.entity{.ts,.js}'],
      entities: [Producto,Rol,Direccion,Usuario,Orden,CarteraCliente,ControlEnvase,OrdenProducto],//not work in web app
      synchronize: true,
    }),
    ProductoModule,
    RolModule,
    DireccionModule,
    OrdenModule,
    UsuarioModule,
    CarteraClienteModule,
    ControlEnvaseModule,
    OrdenProductoModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
