"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta4 = void 0;
class Conta4 {
    get numeroDaConta() {
        return this._numeroDaConta;
    }
    constructor(titular, saldo) {
        this._numeroDaConta = ++Conta4.ultimaConta;
        this.titular = titular;
        this._saldo = saldo;
    }
    // Já que o número da conta foi gerado automaticamente, podemos remover o parâmetro "numeroDaConta" do 
    // construtor e atribuir o valor de ++Conta3.ultimaConta diretamente à propriedade "numeroDaConta" na classe 
    // Conta3, como no exemplo abaixo:
    consultaSaldo() {
        return this._saldo;
    }
    adicionaSaldo(saldo) {
        this._saldo += saldo;
    }
    sacarDoSaldo(saldo) {
        this._saldo -= saldo;
    }
}
exports.Conta4 = Conta4;
Conta4.ultimaConta = 0;
class ContaPF4 extends Conta4 {
    consultar() {
        return `Saldo atual: R${this.consultaSaldo()}`;
    }
    // conforme	 a demanda	que	 temos	começando	por	PF,	onde	o	cliente	não	pode
    //ficar	 negativo.	 Vamos	 criar	 um	 novo	 método	 chamado	 	sacar	,
    //que	valide	se	o	valor	do	saque	é	maior	que	o	saldo	da	conta	e	se	o   
    //saldo	é	maior	que	0,	e	adicionar	um	trecho	de	código	a	ele.
    sacar(valor) {
        if (this.consultaSaldo() > 0 && valor <= this.consultaSaldo()) {
            this.sacarDoSaldo(valor);
        }
    }
    constructor(cpf, titular, saldo) {
        super(titular, saldo);
        this.cpf = cpf;
    }
}
class ContaPJ4 extends Conta4 {
    consultar() {
        return `Saldo atual: R${this.consultaSaldo()}`;
    }
    //Como	 na	 conta	 PJ	 o	 cliente	 pode	ficar	 negativo,	 vamos	 criar
    //um	método	chamado		sacar		 e	 passar	 o	 valor	 do	 seu	 parâmetro
    //para	o	método		sacarDoSaldo		da	classe	pai.
    sacar(valor) {
        this.sacarDoSaldo(valor);
    }
    CalcularTributo() {
        let tributo = (this.consultar() * 1.27);
        return tributo;
    }
    constructor(cnpj, titular, saldo) {
        super(titular, saldo);
        this.cnpj = cnpj;
    }
}
const pessoaFisica4 = new ContaPF4(353, "Silva", 1000);
const pessoaFisica5 = new ContaPF4(353, "José Silva", 1000);
const pessoaJuridica4 = new ContaPJ4(353315658524, 'Maria Elenice', 1500);
console.log(pessoaFisica4, pessoaFisica5);
console.log(pessoaJuridica4);
