"use strict";
class Conta {
    constructor(numeroDaConta, titular, saldo) {
        this.numeroDaConta = numeroDaConta;
        this.titular = titular;
        this.saldo = saldo;
    }
}
const primeiraConta = new Conta(1, 'Thamiris', 1000000000000);
console.log(primeiraConta);
