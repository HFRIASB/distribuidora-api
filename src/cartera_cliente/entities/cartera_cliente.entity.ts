import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class CarteraCliente extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id_cc: number;

    @Column()
    id_vendedor: number;

    @Column()
    id_cliente: number;

}
