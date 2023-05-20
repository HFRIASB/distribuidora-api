import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { OrdenService } from './orden.service';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';

@Controller('orden')
export class OrdenController {
  constructor(private readonly ordenService: OrdenService) {}

  @Post()
  create(@Body() createOrdenDto: CreateOrdenDto) {
    return this.ordenService.create(createOrdenDto);
  }

  @Get('')
  findTodos() {
    return this.ordenService.findTodos();
  }
  @Get('client')
  findNumberOfOrdensByClient() {
    return this.ordenService.findNumbersOfProductsByClient();
  }
  @Get('filterDate')
  findNumberOfOrdersByDate( @Query('fechaInicio') fechaInicio: Date,
  @Query('fechaFin') fechaFin: Date,) {
    return this.ordenService.findNumbersOfProductsByClientAndDate(fechaInicio,fechaFin);
  }

  @Get('estado/:estado')
  findAll(@Param('estado') estado: string) {
    return this.ordenService.findAll(estado);
  }

  @Get('vendedor/:idVendedor')
  findByVendedor(@Param('idVendedor') idVendedor: string) {
    return this.ordenService.findByVendedor(+idVendedor);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordenService.findOne(+id);
  }

  @Get('direccion/:id')
  findOrdenByDireccion(@Param('id') id: string) {
    return this.ordenService.findOrdenByDireccion(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdenDto: UpdateOrdenDto) {
    return this.ordenService.update(+id, updateOrdenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordenService.remove(+id);
  }
}
