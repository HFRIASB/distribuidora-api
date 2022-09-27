import { Module } from '@nestjs/common';
import { ControlFisicoEnvaseService } from './control-fisico-envase.service';
import { ControlFisicoEnvaseController } from './control-fisico-envase.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControlFisicoEnvase } from './entities/control-fisico-envase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ControlFisicoEnvase])],
  controllers: [ControlFisicoEnvaseController],
  providers: [ControlFisicoEnvaseService]
})
export class ControlFisicoEnvaseModule {}
