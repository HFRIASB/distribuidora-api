import { PartialType } from '@nestjs/mapped-types';
import { CreateControlEnvaseDto } from './create-control_envase.dto';

export class UpdateControlEnvaseDto extends PartialType(CreateControlEnvaseDto) {}
