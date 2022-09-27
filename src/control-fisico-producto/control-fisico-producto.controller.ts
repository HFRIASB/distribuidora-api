import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ControlFisicoProductoService } from './control-fisico-producto.service';
import { CreateControlFisicoProductoDto } from './dto/create-control-fisico-producto.dto';
import { UpdateControlFisicoProductoDto } from './dto/update-control-fisico-producto.dto';

@Controller('control-fisico-producto')
export class ControlFisicoProductoController {
  constructor(private readonly controlFisicoProductoService: ControlFisicoProductoService) {}

  @Post()
  create(@Body() createControlFisicoProductoDto: CreateControlFisicoProductoDto) {
    return this.controlFisicoProductoService.create(createControlFisicoProductoDto);
  }

  @Get()
  findAll() {
    return this.controlFisicoProductoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.controlFisicoProductoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateControlFisicoProductoDto: UpdateControlFisicoProductoDto) {
    return this.controlFisicoProductoService.update(+id, updateControlFisicoProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.controlFisicoProductoService.remove(+id);
  }
}
