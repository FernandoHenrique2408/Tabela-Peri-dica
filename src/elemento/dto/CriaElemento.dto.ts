import { IsNotEmpty, IsNumber, IsString, IsUrl, MaxLength, MinLength } from "class-validator";
import { ElementoEUnicoValidator, nomeEUnico } from "../validacao/elemento-e-unico.validator";



export class CaracteristicaElementoDTO {
    @IsString()
    @IsNotEmpty({message:'o nome da caracteristica do elemento não pode ser vazio'})
    nome:string;

    @IsString()
    @IsNotEmpty({message:'Descrição da caracteristica não pode ser vazia'})
    descricao:string
    
}

export class ImagemElementoDTO {
@IsUrl({},{message:'URL para imagem invalida'})
    url: string

    @IsString()
    @IsNotEmpty({message: 'Descrição da imagem não pode ser vazia'})
    descricao:string
}

export class CriaElementoDto {

    @IsString({message: 'Nome do Elemento: tem que ser uma string'})
    @MaxLength(10, {message: 'Nome do Elemento: deve conter no maximo 10 (dez) caracteres'})
    @IsNotEmpty({message:'Nome do Elemento: não pode estar vazio'})
    @nomeEUnico({message:'ja existe um elemeto com esse nome'})
    nome: string;

    @MaxLength(2, {message: 'Simbulo: deve conter no maximo 2 (dois) caracteres'})
    @MinLength(1, {message:'Simbulo: deve ter no minimo 1 (um) caracter'})
    @IsString({message: 'Simbulo: tem que ser uma string'})
    @IsNotEmpty({message: 'Simbulo: não pode ser vazio'})
    simbolo: string;

    @IsNumber({},{message:'Numero: atomico deve conter apenas numeros'})
    @IsNotEmpty({message:'Numero: atomico não pode ser vazio'})
    numero_atomico: number;

    @IsNumber({},{message:'Massa: atomica: deve ter apenas numeros'})
    @IsNotEmpty({message: 'Massa: atomica: não pode ser vazia'})
    massa_atomica: number;

    @IsString({message:'Configuração Eletronica: eletronica e uma string'})
    @IsNotEmpty({message:'Configuração Eletronica: atomica não pode ser vazia'})
    configuracao_eletronica: string;
}
