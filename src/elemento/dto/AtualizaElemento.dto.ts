import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";
import { ElementoEUnicoValidator, nomeEUnico } from "../validacao/elemento-e-unico.validator";
import { Type } from "class-transformer";
import { CaracteristicaElementoDTO, ImagemElementoDTO } from "./CriaElemento.dto";




export class AtualizaElementoDto {

    @IsString({message: 'Nome do Elemento: tem que ser uma string'})
    @MaxLength(10, {message: 'Nome do Elemento: deve conter no maximo 10 (dez) caracteres'})
    @IsNotEmpty({message:'Nome do Elemento: não pode estar vazio'})
    @nomeEUnico({message:'ja existe um elemeto com esse nome'})
    @IsOptional()
    nome: string;

    @MaxLength(2, {message: 'Simbulo: deve conter no maximo 2 (dois) caracteres'})
    @MinLength(1, {message:'Simbulo: deve ter no minimo 1 (um) caracter'})
    @IsString({message: 'Simbulo: tem que ser uma string'})
    @IsNotEmpty({message: 'Simbulo: não pode ser vazio'})
    @IsOptional()
    simbolo: string;

    @IsNumber({},{message:'Numero: atomico deve conter apenas numeros'})
    @IsNotEmpty({message:'Numero: atomico não pode ser vazio'})
    @IsOptional()
    numero_atomico: number;

    @IsNumber({},{message:'Massa: atomica: deve ter apenas numeros'})
    @IsNotEmpty({message: 'Massa: atomica: não pode ser vazia'})
    @IsOptional()
    massa_atomica: number;

    @IsString({message:'Configuração Eletronica: eletronica e uma string'})
    @IsNotEmpty({message:'Configuração Eletronica: atomica não pode ser vazia'})
    @IsOptional()
    configuracao_eletronica: string

    @IsString()
    @IsNotEmpty({message: 'O grupo do elemento nãol pode ser vazio'})
    @IsOptional()
    grupo: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    descricao: string

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(3)
    @Type(() => CaracteristicaElementoDTO)
    @IsOptional()
    caracteristicas: CaracteristicaElementoDTO[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ImagemElementoDTO)
    @IsOptional()
    imagens: ImagemElementoDTO[];
}
