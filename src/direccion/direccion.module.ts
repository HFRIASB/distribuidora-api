import { Module } from '@nestjs/common';
import { DireccionService } from './direccion.service';
import { DireccionController } from './direccion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Direccion } from './entities/direccion.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Orden } from 'src/orden/entities/orden.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Direccion,Usuario,Orden])],
  controllers: [DireccionController],
  providers: [DireccionService]
})
export class DireccionModule {}
