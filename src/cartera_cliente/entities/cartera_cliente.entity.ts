import { Usuario } from "src/usuario/entities/usuario.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class CarteraCliente extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id_cc: number;

    @Column()
    id_vendedor: number;

    // @Column()
    // id_cliente: Usuario;

    @OneToOne(() => Usuario, (usuario: Usuario) => usuario.carteraCliente)
    @JoinColumn()
    usuario: Usuario;

}
