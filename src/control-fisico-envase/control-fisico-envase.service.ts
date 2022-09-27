import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
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
    return this.controlFisicoEnvaseRepository.find({relations: ['tipo_envase']});
  }

  findOne(id_cfe: number) {
    return this.controlFisicoEnvaseRepository.findOne({ where: 
      {id_cfe,},
      relations: ['tipo_envase']
    });
  }

  findByEnvaseMonthYear(idEnvase: number, month:number, year: number){
    return this.controlFisicoEnvaseRepository.find({ 
      where: 
      {
        fecha_cfe: Between(new Date(year, month, 1), new Date(year, month+1, 0, 23, 59, 59)),
        tipo_envase: {
          id_envase: idEnvase
        }
      },
    });
  }

  update(id: number, updateControlFisicoEnvaseDto: UpdateControlFisicoEnvaseDto) {
    return this.controlFisicoEnvaseRepository.update(id,updateControlFisicoEnvaseDto);
  }

  remove(id: number) {
    return this.controlFisicoEnvaseRepository.delete(id);
  }
}
