import { Module } from '@nestjs/common';
import { ControlEnvaseService } from './control_envase.service';
import { ControlEnvaseController } from './control_envase.controller';
import { ControlEnvase } from './entities/control_envase.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orden } from 'src/orden/entities/orden.entity';
import { TipoEnvase } from 'src/tipo-envase/entities/tipo-envase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ControlEnvase,Orden,TipoEnvase])],
  controllers: [ControlEnvaseController],
  providers: [ControlEnvaseService]
})
export class ControlEnvaseModule {}
