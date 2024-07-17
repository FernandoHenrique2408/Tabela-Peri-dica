import { Injectable } from "@nestjs/common";
import { ElementoEntity } from "./elemento.entity";

@Injectable()
export class ElementoRepository{
    private elementos: ElementoEntity [] = [];

    async salvar(elemento: ElementoEntity) {
        this.elementos.push(elemento);
    }

async listar(){
    return this.elementos;
}
    async existeComNomeElemento (nome: string){
        const possivelElemento = this.elementos.find(
            elementos => elementos.nome === nome
        );

        return possivelElemento !== undefined;
    }

    private buscaPorId(id: string) {
        const possivelElemento = this.elementos.find(
        elementoSalvo => elementoSalvo.id === id
    );

    if(!possivelElemento){
        throw new Error('Elemento não existe')
        }

        return possivelElemento;
    }

    async atualiza (id: string, dadosDeAtualizacao: Partial<ElementoEntity>) {
        const elemento = this.buscaPorId(id)

        Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
            if(chave === 'id'){
                return;
            }

            elemento[chave] = valor;
        });

        return elemento

    }

    async remove (id: string) {
        const elemento = this.buscaPorId(id);
        this.elementos = this.elementos.filter(
            elementoSalvo => elementoSalvo.id !== id
        );

        return elemento;
    }

}