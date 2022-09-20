import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(@InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>) {
  }
  async create(createUsuarioDto: CreateUsuarioDto) {
    /* const user = Usuario.create(createUsuarioDto);
     await user.save();
 
     delete user.password_usu;
     return user;*/

    const nuevoUsuario = this.usuarioRepository.create(createUsuarioDto)
    return await this.usuarioRepository.save(nuevoUsuario)


  }

  findAll() {
    return this.usuarioRepository.find({ relations: ['rol', 'direccion', 'orden', 'pago', 'controlEnvase'] });
  }

  findOne(id_usu: number) {
    return this.usuarioRepository.findOne({
      where: { id_usu },
      relations: ['rol', 'direccion', 'pago']
    });
  }

  async findRolNameByUsuario(id_usu: number) {
    const user = await this.usuarioRepository.findOne({
      where: { id_usu },
      relations: ['rol']
    });
    return user.rol;
  }

  async getOnlyClientes() {
    return this.usuarioRepository.find({
      where: {
        rol: {
          nombre_rol: "Cliente"
        }
      },
      relations: ['direccion'],
      select: {
        id_usu: true,
        nombre_usu: true,
        celular_usu: true,
        observacion_usu: true,
        correo_usu: true,
        deuda_usu: true
      }
    })
  }

  async getDetalleClienteById(id_usu: number) {
    const user = await this.usuarioRepository.findOne({
      where: { id_usu },
      relations: ['rol','pago']
    });
    delete user.password_usu;
    const sortedDesc = user.pago.sort(
      (objA, objB) => objB.fecha_pago.getTime() - objA.fecha_pago.getTime(),
    );
    user.pago = sortedDesc;
    return user;
  }

  async findDireccionByUsuario(id_usu) {
    const user = await this.usuarioRepository.findOne({
      where: { id_usu },
      relations: ['direccion']
    });
    return user.direccion
  }

  async findOrdenByUsuario(id_usu, estado) {
    const user = await this.usuarioRepository.findOne({
      where: {
        id_usu: id_usu,
        orden: {
          estado_ord: estado
        }
      },
      relations: ['orden']
    });
    if (user == null) {
      return [];
    } else {
      const orden = user.orden;
      const sortedDesc = orden.sort(
        (objA, objB) => objB.fVenta_ord.getTime() - objA.fVenta_ord.getTime(),
      );
      return sortedDesc
    }
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioRepository.update(id, updateUsuarioDto);
  }

  remove(id: number) {
    return this.usuarioRepository.delete(id);
  }

  async findCliente(id_cliente: number) {
    let cliente;
    await this.usuarioRepository.findOne({
      where: { id_usu: id_cliente }
    }).then(c => {
      cliente = c;
    })
    return cliente;
  }

  async findByEmail(email: string) {
    return await Usuario.findOne({
      where: {
        correo_usu: email,
      },
    });
  }

  findUsuariosByRol(rol: string) {
    if(rol == "Todos") {
      return this.usuarioRepository.find({
        relations: ['rol'],
        select: {
          id_usu: true,
          nombre_usu: true,
          celular_usu: true,
          observacion_usu: true,
          deuda_usu: true,
          correo_usu: true,
          estado_usu: true
        }
      });
    } else {
      return this.usuarioRepository.find({
        where: {
          rol: {
            nombre_rol: rol
          }
        },
        relations: ['rol'],
        select: {
          id_usu: true,
          nombre_usu: true,
          celular_usu: true,
          observacion_usu: true,
          deuda_usu: true,
          correo_usu: true,
          estado_usu: true
        }
      })
    }
  }
}


