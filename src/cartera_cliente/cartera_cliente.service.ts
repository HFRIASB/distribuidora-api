import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarteraClienteDto } from './dto/create-cartera_cliente.dto';
import { CarteraCliente } from './entities/cartera_cliente.entity';

@Injectable()
export class CarteraClienteService {
  
  constructor(@InjectRepository(CarteraCliente)private ccRepository:Repository<CarteraCliente>,
  ){
  }
  async create(createCarteraClienteDto: CreateCarteraClienteDto) {
    return await this.ccRepository.save(createCarteraClienteDto);
  }

  async findByVendedor(id: number) {
    const cartera= await this.ccRepository.find({ 
      where: {id_vendedor: id},
      relations: ['usuario']
     });
     return cartera;
  }
  findAll() {
    return this.ccRepository.find({relations: ['usuario']});
    // return [];
  }

}
