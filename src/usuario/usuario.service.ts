import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(@InjectRepository(Usuario)private usuarioRepository:Repository<Usuario>){
  }
  async create(createUsuarioDto: CreateUsuarioDto) {
   /* const user = Usuario.create(createUsuarioDto);
    await user.save();

    delete user.password_usu;
    return user;*/

    const nuevoUsuario= this.usuarioRepository.create(createUsuarioDto)
    return await this.usuarioRepository.save(nuevoUsuario)
  

  }

  findAll() {
    return this.usuarioRepository.find({relations: ['rol','direccion','orden']});
  }

  findOne(id_usu: number) {
    return this.usuarioRepository.findOne({ 
      where: { id_usu},
      relations: ['rol','direccion','orden'] 
    });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioRepository.update(id,updateUsuarioDto);
  }

  remove(id: number) {
    return this.usuarioRepository.delete(id);
  }

  async findCliente(id_cliente: number){
    let cliente;
     await this.usuarioRepository.findOne({ 
      where: {id_usu: id_cliente}
    }).then(c=>{
      cliente= c;
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
}


