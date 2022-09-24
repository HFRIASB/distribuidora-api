import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrdenProductoDto } from './dto/create-orden_producto.dto';
import { UpdateOrdenProductoDto } from './dto/update-orden_producto.dto';
import { OrdenProducto } from './entities/orden_producto.entity';
import { Between } from 'typeorm';

@Injectable()
export class OrdenProductoService {
  constructor(@InjectRepository(OrdenProducto) private ordenProductoRepository: Repository<OrdenProducto>) {
  }
  async create(createOrdenProductoDto: CreateOrdenProductoDto) {
    return await this.ordenProductoRepository.save(createOrdenProductoDto);
  }

  findAll() {
    return this.ordenProductoRepository.find({ relations: ['producto'] });
  }

  findOne(id_op: number) {
    return this.ordenProductoRepository.findOne({
      where:
        { id_op, },
      relations: ['producto']
    });
  }

  findByOrden(idOrden: number) {
    return this.ordenProductoRepository.find(
      {
        where:
        {
          orden: {
            id_ord: idOrden
          }
        },
        relations: ['producto']
      });
  }

  async getProductoVendidoByYearMonth(idProducto: number, year: number) {
    const productos = await this.ordenProductoRepository.find({
      where:
      {
        producto: {
          id_prod: idProducto
        }, orden: {
          estado_ord: 'Entregado',
          fEntrega_ord: Between(new Date(year, 0, 1), new Date(year, 11, 31, 23, 59, 59))
        }
      }, relations: ['orden']
    });

    let payload = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]

    productos.forEach((p) => {
        payload[p.orden.fEntrega_ord.getMonth()] += p.cantidad_op
    })
    return payload;
  }

  async getProductoVendidoByYear(idProducto: number, year: number, semana: string) {

    const productos = await this.ordenProductoRepository.find({
      where:
      {
        producto: {
          id_prod: idProducto
        }, orden: {
          estado_ord: 'Entregado',
          fEntrega_ord: Between(new Date(year, 0, 1), new Date(year, 11, 31, 23, 59, 59))
        }
      }, relations: ['orden']
    });

    let payload = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]

    productos.forEach((p) => {
      if(this.semana(semana,year, p.orden.fEntrega_ord.getMonth(),p.orden.fEntrega_ord)){
        payload[p.orden.fEntrega_ord.getMonth()] += p.cantidad_op
      }
    })
    return payload;
  }

  semana(semana: string, year: number, month: number, fEntrega_ord: Date) {
    let date;
    let date2;
    if (semana == 'primera') {
      date = new Date(year, month, 1)
      date2 = new Date(year, month, 7, 23, 59, 59)
      if (fEntrega_ord >= date && fEntrega_ord <= date2)
        return true;
      else
        return false
    } else if (semana == 'segunda') {
      date = new Date(year, month, 8)
      date2 = new Date(year, month, 14, 23, 59, 59)
      if (fEntrega_ord >= date && fEntrega_ord <= date2)
        return true;
      else
        return false
    } else if (semana == 'tercera') {
      date = new Date(year, month, 15)
      date2 = new Date(year, month, 21, 23, 59, 59)
      if (fEntrega_ord >= date && fEntrega_ord <= date2)
        return true;
      else
        return false
    } else if (semana == 'cuarta') {
      date = new Date(year, month, 22)
      date2 = new Date(year, month + 1, 0, 23, 59, 59)
      if (fEntrega_ord >= date && fEntrega_ord <= date2)
        return true;
      else
        return false
    }
  }

  update(id: number, updateOrdenProductoDto: UpdateOrdenProductoDto) {
    return this.ordenProductoRepository.update(id, updateOrdenProductoDto);
  }

  remove(id: number) {
    return this.ordenProductoRepository.delete(id);
  }
}
