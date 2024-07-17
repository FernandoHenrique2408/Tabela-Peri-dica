class ListaCaracteristicaElementoDTO {
    nome: string;
    descricao: string;
}

class ListaImagemElemento {
    url: string;
    descricao: string;
}




export class listaElementoDTO {
    constructor(
        readonly nome: string,
        readonly id: string,
    ) {}
}