import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ControlFisicoEnvaseService } from './control-fisico-envase.service';
import { CreateControlFisicoEnvaseDto } from './dto/create-control-fisico-envase.dto';
import { UpdateControlFisicoEnvaseDto } from './dto/update-control-fisico-envase.dto';

@Controller('control-fisico-envase')
export class ControlFisicoEnvaseController {
  constructor(private readonly controlFisicoEnvaseService: ControlFisicoEnvaseService) {}

  @Post()
  create(@Body() createControlFisicoEnvaseDto: CreateControlFisicoEnvaseDto) {
    return this.controlFisicoEnvaseService.create(createControlFisicoEnvaseDto);
  }

  @Get()
  findAll() {
    return this.controlFisicoEnvaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.controlFisicoEnvaseService.findOne(+id);
  }

  @Get('envase/:idEnvase/month/:month/year/:year')
  findByEnvaseMonthYear(@Param('idEnvase') idEnvase: string,@Param('month') month: string,@Param('year') year: string) {
    return this.controlFisicoEnvaseService.findByEnvaseMonthYear(+idEnvase,+month,+year);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateControlFisicoEnvaseDto: UpdateControlFisicoEnvaseDto) {
    return this.controlFisicoEnvaseService.update(+id, updateControlFisicoEnvaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.controlFisicoEnvaseService.remove(+id);
  }
}
