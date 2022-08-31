import { Usuario } from "src/usuario/entities/usuario.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class CarteraCliente extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id_cc: number;

    @Column()
    id_vendedor: number;

    // @Column()
    // id_cliente: Usuario;

    @ManyToOne(() => Usuario, (usuario: Usuario) => usuario.carteraCliente)
    usuario: Usuario;

}
