import { Module } from '@nestjs/common';
import { OrdenProductoService } from './orden_producto.service';
import { OrdenProductoController } from './orden_producto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenProducto } from './entities/orden_producto.entity';
import { Producto } from 'src/producto/entities/producto.entity';
import { Orden } from 'src/orden/entities/orden.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrdenProducto,Producto,Orden])],
  controllers: [OrdenProductoController],
  providers: [OrdenProductoService]
})
export class OrdenProductoModule {}
