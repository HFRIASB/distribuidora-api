import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { Pago } from './entities/pago.entity';

@Injectable()
export class PagoService {
  constructor(@InjectRepository(Pago)private pagoRepository:Repository<Pago>){
  }
  async create(createPagoDto: CreatePagoDto) {
    return await this.pagoRepository.save(createPagoDto);
  }

  findAll() {
    return this.pagoRepository.find() 
     
  }

  findOne(id_pago: number) {
    return this.pagoRepository.findOne({ where: 
      {id_pago,},
      relations: ['usuario']
    });
  }

  update(id: number, updatePagoDto: UpdatePagoDto) {
    return `This action updates a #${id} pago`;
  }

  remove(id: number) {
    return `This action removes a #${id} pago`;
  }
}
