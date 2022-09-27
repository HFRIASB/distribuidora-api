import { Module } from '@nestjs/common';
import { ControlFisicoProductoService } from './control-fisico-producto.service';
import { ControlFisicoProductoController } from './control-fisico-producto.controller';
import { ControlFisicoProducto } from './entities/control-fisico-producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ControlFisicoProducto])],
  controllers: [ControlFisicoProductoController],
  providers: [ControlFisicoProductoService]
})
export class ControlFisicoProductoModule {}
