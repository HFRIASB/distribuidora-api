import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdenProductoService } from './orden_producto.service';
import { CreateOrdenProductoDto } from './dto/create-orden_producto.dto';
import { UpdateOrdenProductoDto } from './dto/update-orden_producto.dto';

@Controller('orden-producto')
export class OrdenProductoController {
  constructor(private readonly ordenProductoService: OrdenProductoService) { }

  @Post()
  create(@Body() createOrdenProductoDto: CreateOrdenProductoDto) {
    return this.ordenProductoService.create(createOrdenProductoDto);
  }

  @Get()
  findAll() {
    return this.ordenProductoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordenProductoService.findOne(+id);
  }

  @Get('byOrden/:idOrden')
  findByOrden(@Param('idOrden') id: string) {
    return this.ordenProductoService.findByOrden(+id);
  }

  @Get('producto-year/:idProducto/:year/:semana')
  findVentasByProducto(
    @Param('idProducto') idProducto: string,
    @Param('year') year: string,
    @Param('semana') semana: string
  ) {
    return this.ordenProductoService.getProductoVendidoByYear(+idProducto, +year, semana);
  }

  @Get('producto-year-month/:idProducto/:year')
  findVentasByProductoMonth(
    @Param('idProducto') idProducto: string,
    @Param('year') year: string,
  ) {
    return this.ordenProductoService.getProductoVendidoByYearMonth(+idProducto, +year);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdenProductoDto: UpdateOrdenProductoDto) {
    return this.ordenProductoService.update(+id, updateOrdenProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordenProductoService.remove(+id);
  }
}
