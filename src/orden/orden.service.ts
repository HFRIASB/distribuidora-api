import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';
import { Orden } from './entities/orden.entity';

@Injectable()
export class OrdenService {
  constructor(@InjectRepository(Orden) private ordenRepository: Repository<Orden>) {
  }
  async create(createOrdenDto: CreateOrdenDto) {
    return await this.ordenRepository.save(createOrdenDto);
  }

  findAll(estado: string) {
    return this.ordenRepository.find({
      where: {
        estado_ord: estado
      },
      relations: ['usuario', 'direccion', 'ordenProducto', 'ordenProducto.producto', 'controlEnvase']
    });
  }

  async findTodos() {
     const ordenes = await this.ordenRepository.find({
      relations: ['usuario', 'direccion', 'ordenProducto', 'ordenProducto.producto', 'controlEnvase']
    });
      const sortedDesc = ordenes.sort(
        (objA, objB) => objB.fEntrega_ord.getTime() - objA.fEntrega_ord.getTime(),
      );
      return sortedDesc
  }

  async findByVendedor(id_vendedor: number) {
    const ordenes = await this.ordenRepository.find({
      where: {
        usuario: {
          carteraCliente: {
            id_vendedor: id_vendedor
          }
        }
      },
     relations: ['usuario', 'direccion']
   });
     const sortedDesc = ordenes.sort(
       (objA, objB) => objB.fEntrega_ord.getTime() - objA.fEntrega_ord.getTime(),
     );
     return sortedDesc
 }

  findOne(id_ord: number) {
    return this.ordenRepository.findOne({
      where:
        { id_ord, },
      relations: ['usuario', 'direccion', 'ordenProducto', 'ordenProducto.producto', 'controlEnvase']
    });
  }

  findOrdenByDireccion(id_ord: number) {
    return this.ordenRepository.findOne({
      where:
        { id_ord },
      relations: ['direccion', 'usuario']
    });
  }

  update(id: number, updateOrdenDto: UpdateOrdenDto) {
    return this.ordenRepository.update(id, updateOrdenDto);
  }

  remove(id: number) {
    return this.ordenRepository.delete(id);
  }

}
