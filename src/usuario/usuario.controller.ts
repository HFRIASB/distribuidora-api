import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get('onlyClientes')
  onlyClientes() {
    return this.usuarioService.getOnlyClientes();
  }

  @Get('rol/:rol')
  usuarioByRol(@Param('rol') rol: string) {
    return this.usuarioService.findUsuariosByRol(rol);
  }

  @Get('rola-name/:id')
  roleNameByUsuario(@Param('id') id: string) {
    return this.usuarioService.findRolNameByUsuario(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Get('detalle-cliente/:id')
  detalleCliente(@Param('id') id: string) {
    return this.usuarioService.getDetalleClienteById(+id);
  }

  @Get('direccion/:id')
  getDirecciones(@Param('id') id: string){
    return this.usuarioService.findDireccionByUsuario(+id);
  }

  @Get('orden/:id/:estado')
  getOrdenes(@Param('id') id: string, @Param('estado') estado: string){
    return this.usuarioService.findOrdenByUsuario(+id,estado);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Patch('resetPassword/:id')
  resetPassword(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.resetPassword(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}