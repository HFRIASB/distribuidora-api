import { PartialType } from '@nestjs/mapped-types';
import { CreateControlFisicoProductoDto } from './create-control-fisico-producto.dto';

export class UpdateControlFisicoProductoDto extends PartialType(CreateControlFisicoProductoDto) {}
