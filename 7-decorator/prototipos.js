"use strict";
// Definindo o objeto base "ElementoQuimico"
const ElementoQuimico = {
    nome: "Desconhecido",
    numeroAtomico: 0,
    simbolo: "X",
    descrever: function () {
        console.log(`Nome: ${this.nome}, Número Atômico: ${this.numeroAtomico}, Símbolo: ${this.simbolo}`);
    }
};
// Criando um elemento químico específico usando o objeto base
const Hidrogenio = Object.create(ElementoQuimico);
Hidrogenio.nome = "Hidrogênio";
Hidrogenio.numeroAtomico = 1;
Hidrogenio.simbolo = "H";
// Criando outro elemento químico específico usando o objeto base
const Oxigenio = Object.create(ElementoQuimico);
Oxigenio.nome = "Oxigênio";
Oxigenio.numeroAtomico = 8;
Oxigenio.simbolo = "O";
Hidrogenio.descrever();
Oxigenio.descrever();
