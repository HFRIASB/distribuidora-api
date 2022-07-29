import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { UsuarioService } from 'src/usuario/usuario.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async login(createAuthDto : CreateAuthDto ) {
    const user = await this.validateUser(createAuthDto);

    const payload = {
      id_usu: user.id_usu,
    };

    return {
      id_usu: user.id_usu,
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(createAuthDto: CreateAuthDto): Promise<Usuario> {
    const { correo_usu, password_usu } = createAuthDto;

    const user = await this.usuarioService.findByEmail(correo_usu);
    if (!(await user?.validatePassword(password_usu))) {
      throw new UnauthorizedException();
    }

    return user;
  }

}
