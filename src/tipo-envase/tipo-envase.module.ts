import { Module } from '@nestjs/common';
import { TipoEnvaseService } from './tipo-envase.service';
import { TipoEnvaseController } from './tipo-envase.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoEnvase } from './entities/tipo-envase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoEnvase])],
  controllers: [TipoEnvaseController],
  providers: [TipoEnvaseService]
})
export class TipoEnvaseModule {}
