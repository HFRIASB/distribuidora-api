import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import {
  Between,
  LessThan,
  LessThanOrEqual,
  MoreThanOrEqual,
  Repository,
} from 'typeorm';
import { CreateCarteraClienteDto } from './dto/create-cartera_cliente.dto';
import { CarteraCliente } from './entities/cartera_cliente.entity';
import { Producto } from 'src/producto/entities/producto.entity';

@Injectable()
export class CarteraClienteService {
  constructor(
    @InjectRepository(CarteraCliente)
    private ccRepository: Repository<CarteraCliente>,
  ) { }
  async create(createCarteraClienteDto: CreateCarteraClienteDto) {
    return await this.ccRepository.save(createCarteraClienteDto);
  }

  async findByVendedor(id: number) {
    const cartera = await this.ccRepository.find({
      where: { id_vendedor: id },
      relations: ['usuario', 'usuario.direccion'],
    });
    return cartera;
  }

  async getProductoVendidoByYear(
    idProducto: number,
    year: number,
    semana: string,
  ) {
    const productos = await this.ccRepository.find({
      select: {
        id_vendedor: true,
        usuario: {
          nombre_usu: true,
          orden: {
            estado_ord: true,
            fEntrega_ord: true,
            ordenProducto: {
              cantidad_op: true,
              producto: {
                id_prod: true,
                nombre_prod: true,
              },
            },
          },
        },
      },
      where: {
        usuario: {
          orden: {
            estado_ord: 'Entregado',
            fEntrega_ord: Between(
              new Date(year, 0, 1),
              new Date(year, 11, 31, 23, 59, 59),
            ),
          },
        },
      },
      relations: ['usuario.orden.ordenProducto.producto'],
    });
    return productos;
  }

  semana(semana: string, year: number, month: number, fEntrega_ord: Date) {
    let date;
    let date2;
    if (semana == 'primera') {
      date = new Date(year, month, 1);
      date2 = new Date(year, month, 7, 23, 59, 59);
      if (fEntrega_ord >= date && fEntrega_ord <= date2) return true;
      else return false;
    } else if (semana == 'segunda') {
      date = new Date(year, month, 8);
      date2 = new Date(year, month, 14, 23, 59, 59);
      if (fEntrega_ord >= date && fEntrega_ord <= date2) return true;
      else return false;
    } else if (semana == 'tercera') {
      date = new Date(year, month, 15);
      date2 = new Date(year, month, 21, 23, 59, 59);
      if (fEntrega_ord >= date && fEntrega_ord <= date2) return true;
      else return false;
    } else if (semana == 'cuarta') {
      date = new Date(year, month, 22);
      date2 = new Date(year, month + 1, 0, 23, 59, 59);
      if (fEntrega_ord >= date && fEntrega_ord <= date2) return true;
      else return false;
    }
  }


  async findNumberOfOrdersByDate(fechaIni: Date, fechaFin: Date) {
    const dato = await this.ccRepository.find({
      select: {
        id_vendedor: true,
        usuario: {
          nombre_usu: true,
          orden: {
            estado_ord: true,
            fEntrega_ord: true,
            ordenProducto: {
              cantidad_op: true,
              producto: {
                id_prod: true,
                nombre_prod: true,
              },
            },
          },
        },
      },
      where: {
        usuario: {
          orden: {
            estado_ord: 'Entregado',
            fEntrega_ord: Between(fechaIni, fechaFin)
          },
        },
      },
      relations: ['usuario.orden.ordenProducto.producto'],
    });

    const result = {};

    dato.forEach((item) => {
      const {
        id_vendedor,
        usuario: { orden },
      } = item;

      orden.forEach((ord) => {
        const { ordenProducto } = ord;

        ordenProducto.forEach((op) => {
          const {
            cantidad_op,
            producto: { id_prod },
          } = op;

          if (!result[id_vendedor]) {
            result[id_vendedor] = {};
          }

          if (!result[id_vendedor][id_prod]) {
            result[id_vendedor][id_prod] = 0;
          }

          result[id_vendedor][id_prod] += cantidad_op;
        });
      });
    });

    return result;
  }
 
  async findNumberOfOrdensByVendor() {
    const dato = await this.ccRepository.find({
      select: {
        id_vendedor: true,
        usuario: {
          nombre_usu: true,
          orden: {
            estado_ord: true,
            ordenProducto: {
              cantidad_op: true,
              producto: {
                id_prod: true,
                nombre_prod: true,
              },
            },
          },
        },
      },
      where: {
        usuario: {
          orden: {
            estado_ord: 'Entregado',
          },
        },
      },
      relations: ['usuario.orden.ordenProducto.producto'],
    });
    const result = {};

    dato.forEach((item) => {
      const {
        id_vendedor,
        usuario: { orden },
      } = item;

      orden.forEach((ord) => {
        const { ordenProducto } = ord;

        ordenProducto.forEach((op) => {
          const {
            cantidad_op,
            producto: { id_prod },
          } = op;

          if (!result[id_vendedor]) {
            result[id_vendedor] = {};
          }

          if (!result[id_vendedor][id_prod]) {
            result[id_vendedor][id_prod] = 0;
          }

          result[id_vendedor][id_prod] += cantidad_op;
        });
      });
    });

    return result;
  }

  // async findvendedorByClientId(usu: any) {
  //   const cartera= await this.ccRepository.findOne({
  //     where: {
  //       // Usuario.id_usu, usu
  //     },
  //     ///complete service
  //    });
  //    return cartera;
  // }
  findAll() {
    return this.ccRepository.find({ relations: ['usuario'] });
    // return [];
  }

  remove(id: number) {
    return this.ccRepository.delete(id);
  }
}
