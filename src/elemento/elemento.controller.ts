import { AtualizaElementoDto } from './dto/AtualizaElemento.dto';
import { CriaElementoDto } from './dto/CriaElemento.dto';
import { listaElementoDTO } from './dto/ListaElemento.dto';
import { ElementoEntity } from './elemento.entity';
import { ElementoRepository } from './elemento.repository';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { v4 as uuid } from 'uuid';

@Controller('/elementos')
export class ElementoController {

    constructor(private elementoRepository: ElementoRepository) {}  

    @Post()
    async criaElemento (@Body() dadosDoElemento: CriaElementoDto) {
        const elementoEntity = new ElementoEntity();
        elementoEntity.id = uuid();
        elementoEntity.nome = dadosDoElemento.nome
        elementoEntity.simbolo = dadosDoElemento.simbolo
        elementoEntity.numero_atomico = dadosDoElemento.numero_atomico
        elementoEntity.massa_atomica = dadosDoElemento.massa_atomica
        elementoEntity.configuracao_eletronica = dadosDoElemento.configuracao_eletronica

        this.elementoRepository.salvar(elementoEntity);
        return {
            elemento: new listaElementoDTO(elementoEntity.nome, elementoEntity.id,),
            message: 'Elemento criado com suceso'
        }
    }
    @Get()
    async listaElementos(){
        const elementosSalvos = await this.elementoRepository.listar();
        const elementosLista = elementosSalvos.map(
            elemento => new listaElementoDTO(
                elemento.nome,
                elemento.id,
            )
        );

        return elementosLista;
    }

    @Put('/:id')
    async atualizaElemento (@Param('id') id: string, @Body() novosDados: AtualizaElementoDto) {
        const elementoAtualizado = await this.elementoRepository.atualiza(id, novosDados );

        return {
            elemento: elementoAtualizado,
            message:'elemento Atualizado com sucesso',
        }
    }

    @Delete('/:id')
    async removeElemento(@Param('id')id: string) {
        const elementoRemovido = await this.elementoRepository.remove(id);

        return {
            elemento: elementoRemovido,
            message:'o elemento foi removido!!!'
        }
    }

}