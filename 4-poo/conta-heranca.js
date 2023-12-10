"use strict";
class Conta2 {
    constructor(numeroDaConta, titular, saldo) {
        this.numeroDaConta = numeroDaConta;
        this.titular = titular;
        this.saldo = saldo;
    }
    consultaSaldo() {
        return `O seu saldo atual é de R${this.saldo}`;
    }
    adicionaSaldo(saldo) {
        this.saldo += saldo;
    }
    sacarDoSaldo(saldo) {
        this.saldo -= saldo;
    }
}
class ContaPF1 extends Conta2 {
}
class ContaPJ1 extends Conta2 {
}
const pessoaFisica = new ContaPF1(1, "José Silva", 1000);
const pessoaJuridica = new ContaPJ1(1, "Maria Santos", 10000);
console.log(pessoaFisica);
console.log(pessoaJuridica);
class ContaPF2 extends Conta2 {
    constructor(cpf, numeroDaConta, titular, saldo) {
        super(numeroDaConta, titular, saldo);
        this.cpf = cpf;
    }
}
//Note	 que	 nós	 temos	 uma	 nova	 palavra	 no	 nosso	 código,	 a
//palavra	 reservada	 	super	.	 Ela	 é	 utilizada	 para	 passar	 os	 valores
//que	estamos	recebendo	via	construtor	para	o	construtor	da	nossa
//classe	pai
class ContaPJ2 extends Conta2 {
    constructor(cnpj, numeroDaConta, titular, saldo) {
        super(numeroDaConta, titular, saldo);
        this.cnpj = cnpj;
    }
}
