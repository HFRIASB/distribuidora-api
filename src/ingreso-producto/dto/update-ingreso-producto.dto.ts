import { PartialType } from '@nestjs/mapped-types';
import { CreateIngresoProductoDto } from './create-ingreso-producto.dto';

export class UpdateIngresoProductoDto extends PartialType(CreateIngresoProductoDto) {}
