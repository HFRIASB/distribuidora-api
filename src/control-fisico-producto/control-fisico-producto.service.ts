import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
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

  findByProductoMonthYear(idProducto: number, month:number, year: number){
    return this.controlFisicoProductoRepository.find({ 
      where: 
      {
        fecha_cfp: Between(new Date(year, month, 1), new Date(year, month+1, 0, 23, 59, 59)),
        producto: {
          id_prod: idProducto
        }
      },
    });
  }

  update(id: number, updateControlFisicoProductoDto: UpdateControlFisicoProductoDto) {
    return this.controlFisicoProductoRepository.update(id,updateControlFisicoProductoDto);
  }

  remove(id: number) {
    return this.controlFisicoProductoRepository.delete(id);
  }
}
