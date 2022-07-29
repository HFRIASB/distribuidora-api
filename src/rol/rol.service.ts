import { Injectable } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from './entities/rol.entity';

@Injectable()
export class RolService {
  constructor(@InjectRepository(Rol)private rolRepository:Repository<Rol>){
  }
  async create(createRolDto: CreateRolDto) {
    return await this.rolRepository.save(createRolDto);
  }

  findAll() {
    return this.rolRepository.find({relations: ['usuario']});
  }

  findOne(id_rol: number) {
    return this.rolRepository.findOne({ 
      where: {id_rol,},
      relations: ['usuario'] 
    });
  }

  update(id: number, updateRolDto: UpdateRolDto) {
    return this.rolRepository.update(id,updateRolDto)
  }

  remove(id: number) {
    return this.rolRepository.delete(id);
  }
}
