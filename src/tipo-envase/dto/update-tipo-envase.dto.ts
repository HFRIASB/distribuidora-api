import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoEnvaseDto } from './create-tipo-envase.dto';

export class UpdateTipoEnvaseDto extends PartialType(CreateTipoEnvaseDto) {}
