import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IngresoProductoService } from './ingreso-producto.service';
import { CreateIngresoProductoDto } from './dto/create-ingreso-producto.dto';
import { UpdateIngresoProductoDto } from './dto/update-ingreso-producto.dto';

@Controller('ingreso-producto')
export class IngresoProductoController {
  constructor(private readonly ingresoProductoService: IngresoProductoService) {}

  @Post()
  create(@Body() createIngresoProductoDto: CreateIngresoProductoDto) {
    return this.ingresoProductoService.create(createIngresoProductoDto);
  }

  @Get()
  findAll() {
    return this.ingresoProductoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingresoProductoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIngresoProductoDto: UpdateIngresoProductoDto) {
    return this.ingresoProductoService.update(+id, updateIngresoProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingresoProductoService.remove(+id);
  }
}
