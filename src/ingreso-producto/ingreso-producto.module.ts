import { Module } from '@nestjs/common';
import { IngresoProductoService } from './ingreso-producto.service';
import { IngresoProductoController } from './ingreso-producto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngresoProducto } from './entities/ingreso-producto.entity';
import { Producto } from 'src/producto/entities/producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IngresoProducto,Producto])],
  controllers: [IngresoProductoController],
  providers: [IngresoProductoService]
})
export class IngresoProductoModule {}
