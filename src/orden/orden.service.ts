import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
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
      (objA, objB) => objA.fEntrega_ord.getTime() - objB.fEntrega_ord.getTime(),
    );
    return sortedDesc
  }
  async findNumbersOfProductsByClientAndDate(fechaIni: Date, fechaFin: Date) {
    const dato = await this.ordenRepository.find({
      select: {
        id_ord:true,
        fEntrega_ord:true,
        estado_ord: true,
        numNota_ord:true,
        usuario: {
          id_usu: true,
          nombre_usu: true
        },
        ordenProducto: {
          cantidad_op: true,
          producto: {
            id_prod: true,
            nombre_prod: true,
            uniMedida_prod:true
          },
        },
        controlEnvase: {
          cantEnvase_ce: true,
          motivo_ce:true,
          tipoEnvase:{
            id_envase:true,
            nombre_envase:true,
          }
        }
      },
      where: {
        estado_ord: 'Entregado',
        fEntrega_ord: Between(fechaIni, fechaFin)
      },
      relations: ['usuario', 'ordenProducto.producto', 'controlEnvase.tipoEnvase'],
    }); 
    const filteredData = dato.map((entry) => {
      if (entry.controlEnvase && entry.controlEnvase.length > 0) {
        const controlEnvaseEntrada = entry.controlEnvase.filter((envase) => envase.motivo_ce === 'Entrada');
        if (controlEnvaseEntrada.length > 0) {
          return {
            ...entry,
            controlEnvase: controlEnvaseEntrada,
          };
        }
      }
      return {
        ...entry,
        controlEnvase: undefined,
      };
    });
    
    return filteredData;
  }
  async findNumbersOfProductsByClient() {
    const dato = await this.ordenRepository.find({
      select: {
        id_ord:true,
        fEntrega_ord:true,
        estado_ord: true,
        numNota_ord:true,
        usuario: {
          id_usu: true,
          nombre_usu: true
        },
        ordenProducto: {
          cantidad_op: true,
          producto: {
            id_prod: true,
            nombre_prod: true,
            uniMedida_prod:true
          },
        },
        controlEnvase: {
          cantEnvase_ce: true,
          motivo_ce:true,
          tipoEnvase:{
            id_envase:true,
            nombre_envase:true,
          }
        }
      },
      where: {
        estado_ord: 'Entregado',
      },
      relations: ['usuario', 'ordenProducto.producto', 'controlEnvase.tipoEnvase'],
    }); 
    const filteredData = dato.map((entry) => {
      if (entry.controlEnvase && entry.controlEnvase.length > 0) {
        const controlEnvaseEntrada = entry.controlEnvase.filter((envase) => envase.motivo_ce === 'Entrada');
        if (controlEnvaseEntrada.length > 0) {
          return {
            ...entry,
            controlEnvase: controlEnvaseEntrada,
          };
        }
      }
      return {
        ...entry,
        controlEnvase: undefined,
      };
    });
    
    return filteredData;
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
      relations: ['usuario', 'direccion', 'ordenProducto', 'ordenProducto.producto', 'controlEnvase']
    });
    const sortedDesc = ordenes.sort(
      (objA, objB) => objA.fEntrega_ord.getTime() - objB.fEntrega_ord.getTime(),
    );
    return sortedDesc
  }

  findOne(id_ord: number) {
    return this.ordenRepository.findOne({
      where:
        { id_ord, },
      relations: ['usuario', 'direccion', 'ordenProducto', 'ordenProducto.producto', 'controlEnvase', 'controlEnvase.tipoEnvase']
    });
  }

  findOrdenByDireccion(id_ord: number) {
    return this.ordenRepository.findOne({
      where:
        { id_ord },
      relations: ['direccion', 'usuario']
    });
  }

  // findByMonthYear(idProducto: number, month:number, year: number){
  //   return this.controlFisicoProductoRepository.find({ 
  //     where: 
  //     {
  //       fecha_cfp: Between(new Date(year, month, 1), new Date(year, month+1, 0, 23, 59, 59)),
  //       producto: {
  //         id_prod: idProducto
  //       }
  //     },
  //   });
  // }


  update(id: number, updateOrdenDto: UpdateOrdenDto) {
    return this.ordenRepository.update(id, updateOrdenDto);
  }

  remove(id: number) {
    return this.ordenRepository.delete(id);
  }

}
