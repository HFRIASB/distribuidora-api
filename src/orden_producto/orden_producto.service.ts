import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrdenProductoDto } from './dto/create-orden_producto.dto';
import { UpdateOrdenProductoDto } from './dto/update-orden_producto.dto';
import { OrdenProducto } from './entities/orden_producto.entity';

@Injectable()
export class OrdenProductoService {
  constructor(@InjectRepository(OrdenProducto)private ordenProductoRepository:Repository<OrdenProducto>){
  }
  async create(createOrdenProductoDto: CreateOrdenProductoDto) {
    return await this.ordenProductoRepository.save(createOrdenProductoDto);
  }

  findAll() {
    return this.ordenProductoRepository.find({relations: ['producto']});
  }

  findOne(id_op: number) {
    return this.ordenProductoRepository.findOne({ where: 
      {id_op,},
      relations: ['producto'] 
    });
  }

  update(id: number, updateOrdenProductoDto: UpdateOrdenProductoDto) {
    return this.ordenProductoRepository.update(id,updateOrdenProductoDto);
  }

  remove(id: number) {
    return this.ordenProductoRepository.delete(id);
  }
}
