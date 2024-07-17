import {
     IsLowercase,
     IsUppercase,
     Max, 
     Min } from "class-validator";
import {
     Column, 
     CreateDateColumn, 
     DeleteDateColumn, 
     Entity, 
     PrimaryGeneratedColumn, 
     UpdateDateColumn } from "typeorm";

@Entity({name: 'elemntos'})
export class ElementoEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name: 'nome', length: 50, nullable: false })
    nome: string;

    @Column({name:'simbolo', length:2, nullable: false })
    @IsUppercase({message:'O primeiro caratere deve ser maiúsculo'})
    @IsLowercase({message:'O segundo carcter deve ser minusculo'})    
    simbolo: string ;

    @Column({name: 'numero_atomico', type: 'integer', nullable: false })
    @Min(1,{message: 'O numero atomico deve ser maior que zero'})
    @Max(118,{message:'O numero atomico deve ser menor ou igual a 118'})
    numero_atomico: number;

    @Column({
        name: 'massa_atomica',
        type:'decimal',
        precision: 12,
        scale: 8,
        nullable: false })
    massa_atomica: number;

    @Column({name: 'configuracao_eletronica', length: 50, nullable: false })
    configuracao_eletronica:string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: string;

    @UpdateDateColumn({name:'updated_at'})
    updateAt: string;

    @DeleteDateColumn({name: 'deleted_at'})
    deleteAt: string;
} 