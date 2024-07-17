import { Entity, Column } from "typeorm";


@Entity({name: "elemento_imagens"})
class elementoImagem {
    @Column({name:'url', length: 500, nullable: false})
    url:string;

    @Column({name:'descricao', length: 500, nullable: false})
    descricao: string;
}