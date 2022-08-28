import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoEnvaseService } from './tipo-envase.service';
import { CreateTipoEnvaseDto } from './dto/create-tipo-envase.dto';
import { UpdateTipoEnvaseDto } from './dto/update-tipo-envase.dto';

@Controller('tipo-envase')
export class TipoEnvaseController {
  constructor(private readonly tipoEnvaseService: TipoEnvaseService) {}

  @Post()
  create(@Body() createTipoEnvaseDto: CreateTipoEnvaseDto) {
    return this.tipoEnvaseService.create(createTipoEnvaseDto);
  }

  @Get()
  findAll() {
    return this.tipoEnvaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoEnvaseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoEnvaseDto: UpdateTipoEnvaseDto) {
    return this.tipoEnvaseService.update(+id, updateTipoEnvaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoEnvaseService.remove(+id);
  }
}
