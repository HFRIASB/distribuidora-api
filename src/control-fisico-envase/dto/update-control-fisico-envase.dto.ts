import { PartialType } from '@nestjs/mapped-types';
import { CreateControlFisicoEnvaseDto } from './create-control-fisico-envase.dto';

export class UpdateControlFisicoEnvaseDto extends PartialType(CreateControlFisicoEnvaseDto) {}
