import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTipoEnvaseDto } from './dto/create-tipo-envase.dto';
import { UpdateTipoEnvaseDto } from './dto/update-tipo-envase.dto';
import { TipoEnvase } from './entities/tipo-envase.entity';

@Injectable()
export class TipoEnvaseService {
  constructor(@InjectRepository(TipoEnvase)private tipoEnvaseRepository:Repository<TipoEnvase>){
  }
  async create(createTipoEnvaseDto: CreateTipoEnvaseDto) {
    return await this.tipoEnvaseRepository.save(createTipoEnvaseDto);
  }

  findAll() {
    return this.tipoEnvaseRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoEnvase`;
  }

  update(id: number, updateTipoEnvaseDto: UpdateTipoEnvaseDto) {
    return this.tipoEnvaseRepository.update(id,updateTipoEnvaseDto)
  }

  remove(id: number) {
    return `This action removes a #${id} tipoEnvase`;
  }
}
