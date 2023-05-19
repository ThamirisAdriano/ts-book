//declaração que pode ser anexada numa classe, método, parâmetro, acesso..
//trabalha em cima das partes anotadas para que seja possível adicionar novas coisas, vigia as marcações para que possa adicionar um elemento novo, fazer uma validação..

//criando um decorator - função que recebe uma parâmetros por default baseado em qual tipo de decorator estamos trabalhamos e retorna algo

//decorator de classe recebe um parâmetro
// function log(target: any){
//     console.log(target);
// }

// @log
// class Foo {}

//factory - função que retorna a criação do decorator

interface Tributavel{
    CalcularTributo(): number
}

function analisaSaldo(target:any, key: any, description: any){

}

abstract class ContaDecorator {

    private static ultimaConta: number = 0;

    private readonly _numeroDaConta: number;
    titular: string;
    private _saldo: number;

    get numeroDaConta(): number {
        return this._numeroDaConta
    }

    constructor(titular: string, saldo: number){
        this._numeroDaConta = ++ ContaDecorator.ultimaConta;
        this.titular = titular;
        this._saldo = saldo;
    }

    @analisaSaldo
    consultaSaldo(): string {
        return `O seu saldo atual é: ${this._saldo}`
    }

}

console.log(analisaSaldo)

class MinhaClasse {
    @meuDecorator
    minhaPropriedade: string | undefined;
  }

function meuDecorator(target: any, propertyKey: string) {
    console.log(target);       // Exibe o protótipo da classe (MinhaClasse)
    console.log(propertyKey);  // Exibe o nome da propriedade ("minhaPropriedade")
  }

  