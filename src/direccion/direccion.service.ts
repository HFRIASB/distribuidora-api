import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDireccionDto } from './dto/create-direccion.dto';
import { UpdateDireccionDto } from './dto/update-direccion.dto';
import { Direccion } from './entities/direccion.entity';

@Injectable()
export class DireccionService {
  constructor(@InjectRepository(Direccion)private direccionRepository:Repository<Direccion>){
  }
  async create(createDireccionDto: CreateDireccionDto) {
    return await this.direccionRepository.save(createDireccionDto);
  }

  findAll() {
    return this.direccionRepository.find({relations: ['usuario']});
  }

  findOne(id_direc: number) {
    return this.direccionRepository.findOne({ 
      where: {id_direc,},
      relations: ['usuario'] 
     });
  }

  update(id: number, updateDireccionDto: UpdateDireccionDto) {
    return this.direccionRepository.update(id, updateDireccionDto)
  }

  remove(id: number) {
    return this.direccionRepository.delete(id);
  }
}
