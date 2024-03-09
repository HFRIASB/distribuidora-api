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
import { PagoModule } from './pago/pago.module';
import { Pago } from './pago/entities/pago.entity';
import { TipoEnvaseModule } from './tipo-envase/tipo-envase.module';
import { TipoEnvase } from './tipo-envase/entities/tipo-envase.entity';
import { AlmacenModule } from './almacen/almacen.module';
import { Almacen } from './almacen/entities/almacen.entity';
import { ControlFisicoProductoModule } from './control-fisico-producto/control-fisico-producto.module';
import { ControlFisicoEnvaseModule } from './control-fisico-envase/control-fisico-envase.module';
import { ControlFisicoEnvase } from './control-fisico-envase/entities/control-fisico-envase.entity';
import { ControlFisicoProducto } from './control-fisico-producto/entities/control-fisico-producto.entity';
import { IngresoProductoModule } from './ingreso-producto/ingreso-producto.module';
import { IngresoProducto } from './ingreso-producto/entities/ingreso-producto.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'us-cluster-east-01.k8s.cleardb.net',
      port: 3306,
      username: 'b02fcdda0834d4',
      password: '3f2530bc',
      database: 'heroku_92a08517b3db312',
      //entities: ['dist//.entity{.ts,.js}'],
      entities: [Producto,
        Rol,
        Direccion,
        Usuario, 
        Orden, 
        CarteraCliente, 
        ControlEnvase, 
        OrdenProducto, 
        Pago, TipoEnvase, 
        Almacen, 
        ControlFisicoEnvase, 
        ControlFisicoProducto,
        IngresoProducto
      ],//not work in web app
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
    PagoModule,
    TipoEnvaseModule,
    AlmacenModule,
    ControlFisicoProductoModule,
    ControlFisicoEnvaseModule,
    IngresoProductoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
