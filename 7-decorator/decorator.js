"use strict";
//declaração que pode ser anexada numa classe, método, parâmetro, acesso..
//trabalha em cima das partes anotadas para que seja possível adicionar novas coisas, vigia as marcações para que possa adicionar um elemento novo, fazer uma validação..
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function analisaSaldo(target, key, description) {
}
class ContaDecorator {
    get numeroDaConta() {
        return this._numeroDaConta;
    }
    constructor(titular, saldo) {
        this._numeroDaConta = ++ContaDecorator.ultimaConta;
        this.titular = titular;
        this._saldo = saldo;
    }
    consultaSaldo() {
        return `O seu saldo atual é: ${this._saldo}`;
    }
}
ContaDecorator.ultimaConta = 0;
__decorate([
    analisaSaldo,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ContaDecorator.prototype, "consultaSaldo", null);
console.log(analisaSaldo);
class MinhaClasse {
}
__decorate([
    meuDecorator,
    __metadata("design:type", Object)
], MinhaClasse.prototype, "minhaPropriedade", void 0);
function meuDecorator(target, propertyKey) {
    console.log(target); // Exibe o protótipo da classe (MinhaClasse)
    console.log(propertyKey); // Exibe o nome da propriedade ("minhaPropriedade")
}
