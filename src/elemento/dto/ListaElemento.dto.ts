class ListaCaracteristicaElementoDTO {
    nome: string;
    descricao: string;

    constructor(nome: string, descricao: string) {
        this.nome = nome;
        this.descricao = descricao;
    }
}

class ListaImagemElementoDTO {
    url: string;
    descricao: string;

    constructor(url: string, descricao: string) {
        this.url = url;
        this.descricao = descricao;
    }
}       


export class listaElementoDTO {
    constructor(
        readonly id: string,
        readonly nome: string,
    ) {}
}