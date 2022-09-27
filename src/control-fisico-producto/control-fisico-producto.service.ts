import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateControlFisicoProductoDto } from './dto/create-control-fisico-producto.dto';
import { UpdateControlFisicoProductoDto } from './dto/update-control-fisico-producto.dto';
import { ControlFisicoProducto } from './entities/control-fisico-producto.entity';

@Injectable()
export class ControlFisicoProductoService {
  constructor(@InjectRepository(ControlFisicoProducto)private controlFisicoProductoRepository:Repository<ControlFisicoProducto>){
  }
  async create(createControlFisicoProductoDto: CreateControlFisicoProductoDto) {
    return await this.controlFisicoProductoRepository.save(createControlFisicoProductoDto);
  }

  findAll() {
    return this.controlFisicoProductoRepository.find({relations: ['producto']});
  }

  findOne(id_cfp: number) {
    return this.controlFisicoProductoRepository.findOne({ where: 
      {id_cfp,},
      relations: ['producto']
    });
  }

  update(id: number, updateControlFisicoProductoDto: UpdateControlFisicoProductoDto) {
    return this.controlFisicoProductoRepository.update(id,updateControlFisicoProductoDto);
  }

  remove(id: number) {
    return this.controlFisicoProductoRepository.delete(id);
  }
}
