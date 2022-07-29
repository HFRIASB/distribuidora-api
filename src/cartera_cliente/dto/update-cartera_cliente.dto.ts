import { PartialType } from '@nestjs/mapped-types';
import { CreateCarteraClienteDto } from './create-cartera_cliente.dto';

export class UpdateCarteraClienteDto extends PartialType(CreateCarteraClienteDto) {}
