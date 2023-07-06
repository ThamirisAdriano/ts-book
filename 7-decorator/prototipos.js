// Definindo o objeto base "ElementoQuimico"
var ElementoQuimico = {
    nome: "Desconhecido",
    numeroAtomico: 0,
    simbolo: "X",
    descrever: function () {
        console.log("Nome: ".concat(this.nome, ", N\u00FAmero At\u00F4mico: ").concat(this.numeroAtomico, ", S\u00EDmbolo: ").concat(this.simbolo));
    }
};
// Criando um elemento químico específico usando o objeto base
var Hidrogenio = Object.create(ElementoQuimico);
Hidrogenio.nome = "Hidrogênio";
Hidrogenio.numeroAtomico = 1;
Hidrogenio.simbolo = "H";
// Criando outro elemento químico específico usando o objeto base
var Oxigenio = Object.create(ElementoQuimico);
Oxigenio.nome = "Oxigênio";
Oxigenio.numeroAtomico = 8;
Oxigenio.simbolo = "O";
// Testando os elementos químicos
Hidrogenio.descrever(); // Saída: "Nome: Hidrogênio, Número Atômico: 1, Símbolo: H"
Oxigenio.descrever(); // Saída: "Nome: Oxigênio, Número Atômico: 8, Símbolo: O"
