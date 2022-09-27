import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateControlFisicoEnvaseDto } from './dto/create-control-fisico-envase.dto';
import { UpdateControlFisicoEnvaseDto } from './dto/update-control-fisico-envase.dto';
import { ControlFisicoEnvase } from './entities/control-fisico-envase.entity';

@Injectable()
export class ControlFisicoEnvaseService {
  constructor(@InjectRepository(ControlFisicoEnvase)private controlFisicoEnvaseRepository:Repository<ControlFisicoEnvase>){
  }
  async create(createControlFisicoEnvaseDto: CreateControlFisicoEnvaseDto) {
    return await this.controlFisicoEnvaseRepository.save(createControlFisicoEnvaseDto);
  }

  findAll() {
    return this.controlFisicoEnvaseRepository.find({relations: ['control_envase']});
  }

  findOne(id_cfe: number) {
    return this.controlFisicoEnvaseRepository.findOne({ where: 
      {id_cfe,},
      relations: ['control_envase']
    });
  }

  update(id: number, updateControlFisicoEnvaseDto: UpdateControlFisicoEnvaseDto) {
    return this.controlFisicoEnvaseRepository.update(id,updateControlFisicoEnvaseDto);
  }

  remove(id: number) {
    return this.controlFisicoEnvaseRepository.delete(id);
  }
}
