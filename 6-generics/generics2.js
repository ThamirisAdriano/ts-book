var Pessoa2 = /** @class */ (function () {
    function Pessoa2(nome) {
        this.nome = nome;
    }
    return Pessoa2;
}());
var CaixaNome = /** @class */ (function () {
    function CaixaNome(conteudo) {
        this.conteudo = conteudo;
    }
    return CaixaNome;
}());
var pessoa4 = new Pessoa2("João");
var caixa = new CaixaNome(pessoa4);
console.log(caixa.conteudo.nome); // Isso exibirá "João" no terminal
