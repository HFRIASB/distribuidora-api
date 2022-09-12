import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
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
    const cartera = await this.ccRepository.find({ 
      where: {id_vendedor: id},
      relations: ['usuario']
     });
     return cartera;
  }

  async findvendedorByClientId(usu: any) {
    const cartera= await this.ccRepository.findOne({ 
      where: {
        // Usuario.id_usu, usu
      },
      ///complete service
     });
     return cartera;
  }
  findAll() {
    return this.ccRepository.find({relations: ['usuario']});
    // return [];
  }

}
