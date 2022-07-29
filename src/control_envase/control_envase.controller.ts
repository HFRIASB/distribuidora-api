import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ControlEnvaseService } from './control_envase.service';
import { CreateControlEnvaseDto } from './dto/create-control_envase.dto';
import { UpdateControlEnvaseDto } from './dto/update-control_envase.dto';

@Controller('control-envase')
export class ControlEnvaseController {
  constructor(private readonly controlEnvaseService: ControlEnvaseService) {}

  @Post()
  create(@Body() createControlEnvaseDto: CreateControlEnvaseDto) {
    return this.controlEnvaseService.create(createControlEnvaseDto);
  }

  @Get()
  findAll() {
    return this.controlEnvaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.controlEnvaseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateControlEnvaseDto: UpdateControlEnvaseDto) {
    return this.controlEnvaseService.update(+id, updateControlEnvaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.controlEnvaseService.remove(+id);
  }
}
