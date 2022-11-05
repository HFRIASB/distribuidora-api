import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIngresoProductoDto } from './dto/create-ingreso-producto.dto';
import { UpdateIngresoProductoDto } from './dto/update-ingreso-producto.dto';
import { IngresoProducto } from './entities/ingreso-producto.entity';

@Injectable()
export class IngresoProductoService {
  constructor(@InjectRepository(IngresoProducto) private ingresoProductoRepository: Repository<IngresoProducto>) {
  }

  async create(createIngresoProductoDto: CreateIngresoProductoDto) {
    return await this.ingresoProductoRepository.save(createIngresoProductoDto);
  }

  async findAll() {
    const ingresos = await this.ingresoProductoRepository.find({relations: ['producto']});
    const sortedDesc = ingresos.sort(
      (objA, objB) => objB.fecha_ingreso_producto.getTime() - objA.fecha_ingreso_producto.getTime(),
    )
    return sortedDesc;
  }

  findOne(id_ingreso_producto: number) {
    return this.ingresoProductoRepository.findOne({
      where: { id_ingreso_producto },
      relations: ['producto']
    });
  }

  update(id: number, updateIngresoProductoDto: UpdateIngresoProductoDto) {
    return this.ingresoProductoRepository.update(id, updateIngresoProductoDto)
  }

  remove(id: number) {
    return this.ingresoProductoRepository.delete(id);
  }
}
