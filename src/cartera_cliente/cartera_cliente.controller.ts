import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CarteraClienteService } from './cartera_cliente.service';
import { CreateCarteraClienteDto } from './dto/create-cartera_cliente.dto';
import { UpdateCarteraClienteDto } from './dto/update-cartera_cliente.dto';

@Controller('cartera-cliente')
export class CarteraClienteController {
  constructor(private readonly carteraClienteService: CarteraClienteService) {}

  @Post()
  create(@Body() createCarteraClienteDto: CreateCarteraClienteDto) {
    return this.carteraClienteService.create(createCarteraClienteDto);
  }
  @Get('vendedor')
  findNumberOfOrdensByVendor() {
    return this.carteraClienteService.findNumberOfOrdensByVendor();
  }
  @Get('filterDate')
  findNumberOfOrdersByDate( @Query('fechaInicio') fechaInicio: Date,
  @Query('fechaFin') fechaFin: Date,) {
    return this.carteraClienteService.findNumberOfOrdersByDate(fechaInicio,fechaFin);
  }

  @Get()
  find() {
    return this.carteraClienteService.findAll();
  }

  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.carteraClienteService.findByVendedor(+id);
  }

  // @Get(':id')
  // findVendedorByClienteId(@Param('id') id: string) {
  //   return this.carteraClienteService.findvendedorByClientId(+id);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carteraClienteService.remove(+id);
  }
}
