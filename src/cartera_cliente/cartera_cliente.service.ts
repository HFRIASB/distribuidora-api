import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioService } from 'src/usuario/usuario.service';
import { Repository } from 'typeorm';
import { CreateCarteraClienteDto } from './dto/create-cartera_cliente.dto';
import { CarteraCliente } from './entities/cartera_cliente.entity';

@Injectable()
export class CarteraClienteService {
  
  constructor(@InjectRepository(CarteraCliente)private ccRepository:Repository<CarteraCliente>,
  private userService: UsuarioService 
  ){
  }
  async create(createCarteraClienteDto: CreateCarteraClienteDto) {
    return await this.ccRepository.save(createCarteraClienteDto);
  }

  async findByVendedor(id: number) {
    const cartera= await this.ccRepository.find({ 
      where: {id_vendedor: id}
     });
     let nuevaCartera=[];
     cartera.forEach(async c=>{
     /* await this.userService.findCliente(c.id_cliente).then(cliente=>{
        console.log(cliente);
        nuevaCartera.push(cliente)
      })*/
      //nuevaCartera.push(await this.userService.findOne(c.id_cliente))
      nuevaCartera.push(c.id_cliente)
     })
     return nuevaCartera;

  }

}
