import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateControlEnvaseDto } from './dto/create-control_envase.dto';
import { UpdateControlEnvaseDto } from './dto/update-control_envase.dto';
import { ControlEnvase } from './entities/control_envase.entity';

@Injectable()
export class ControlEnvaseService {
  constructor(@InjectRepository(ControlEnvase)private controlEnvaseRepository:Repository<ControlEnvase>){
  }
  async create(createControlEnvaseDto: CreateControlEnvaseDto) {
    return await this.controlEnvaseRepository.save(createControlEnvaseDto);
  }

  findAll() {
    return this.controlEnvaseRepository.find();
  }

  findOne(id_ce: number) {
    return this.controlEnvaseRepository.findOne({ where: 
      {id_ce,}
    });
  }

  update(id: number, updateControlEnvaseDto: UpdateControlEnvaseDto) {
    return this.controlEnvaseRepository.update(id,updateControlEnvaseDto);
  }

  remove(id: number) {
    return this.controlEnvaseRepository.delete(id);
  }
}
