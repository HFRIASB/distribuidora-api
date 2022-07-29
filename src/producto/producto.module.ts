import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { Producto } from './entities/producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orden } from 'src/orden/entities/orden.entity';
import { OrdenProducto } from 'src/orden_producto/entities/orden_producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producto,OrdenProducto])],
  controllers: [ProductoController],
  providers: [ProductoService]
})
export class ProductoModule {}
