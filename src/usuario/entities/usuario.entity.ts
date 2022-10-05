import { ControlEnvase } from "src/control_envase/entities/control_envase.entity";
import { Direccion } from "src/direccion/entities/direccion.entity";
import { Orden } from "src/orden/entities/orden.entity";
import { Rol } from "src/rol/entities/rol.entity";
import { BaseEntity, BeforeInsert, Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Pago } from "src/pago/entities/pago.entity";
import { CarteraCliente } from "src/cartera_cliente/entities/cartera_cliente.entity";

@Entity()

export class Usuario extends BaseEntity{

    @PrimaryGeneratedColumn()
    id_usu: number;

    @Column({type: "varchar", length: 30, nullable: false})
    nombre_usu: string;

    @Column({type: "varchar", length: 10})
    nroDocu_usu: string;

    @Column({type: "varchar", length: 10, nullable: false})
    sexo_usu: string;

    @Column({type: "varchar", length: 10, nullable: false})
    celular_usu: string;

    @Column()
    fRegistro_usu: Date;

    @Column({type: "varchar", length: 10, default: "activo"})
    estado_usu: string;

    @Column({unique: true})
    correo_usu: string;

    @Column()
    password_usu: string;
    @BeforeInsert()
    async hashPassword() {
      this.password_usu = await bcrypt.hash(this.password_usu, 8);
    }

    async validatePassword(password: string): Promise<boolean> {
      return bcrypt.compare(password, this.password_usu);
    }

    @Column()
    observacion_usu: string;

    @Column({type: "decimal", precision: 10, scale: 2, default: 0})
    deuda_usu: number;

    @ManyToOne(() => Rol, (rol: Rol) => rol.usuario)
    rol: Rol;

    @OneToMany(() => Direccion, (direccion: Direccion) => direccion.usuario)
    direccion: Direccion[];

    @OneToOne(() => CarteraCliente, (carteraCliente: CarteraCliente) => carteraCliente.usuario)
    carteraCliente: CarteraCliente;


    @OneToMany(() => Orden, (orden: Orden) => orden.usuario)
    orden: Orden[];

    @OneToMany(() => ControlEnvase, (controlEnvase: ControlEnvase) =>controlEnvase.usuario)
    controlEnvase: ControlEnvase[];

    @OneToMany(() => Pago, (pago: Pago) => pago.usuario)
    pago: Pago[];

}
