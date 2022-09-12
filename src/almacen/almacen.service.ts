import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlmacenDto } from './dto/create-almacen.dto';
import { UpdateAlmacenDto } from './dto/update-almacen.dto';
import { Almacen } from './entities/almacen.entity';

@Injectable()
export class AlmacenService {
  constructor(@InjectRepository(Almacen)private almacenRepository:Repository<Almacen>){
  }
  async create(createAlmacenDto: CreateAlmacenDto) {
    return await this.almacenRepository.save(createAlmacenDto);
  }

  findAll() {
    return this.almacenRepository.find();
  }

  findOne(id_almacen: number) {
    return this.almacenRepository.findOne({
      where: { id_almacen }
    });
  }

  update(id: number, updateAlmacenDto: UpdateAlmacenDto) {
    return this.almacenRepository.update(id,updateAlmacenDto)
  }

  remove(id: number) {
    return `This action removes a #${id} almacen`;
  }
}
