import { Entity, Column } from 'typeorm';

@Entity('elemento_caracteristicas')
export class ElementoCaracteristica {

    @Column ({name: 'nome', length: 500, nullable: false})
    nome: string;

    @Column ({name: 'descricao', length: 500, nullable: false})
    descricao:string;
}