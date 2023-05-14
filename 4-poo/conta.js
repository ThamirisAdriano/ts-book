var Conta = /** @class */ (function () {
    function Conta(numeroDaConta, titular, saldo) {
        this.numeroDaConta = numeroDaConta;
        this.titular = titular;
        this.saldo = saldo;
    }
    return Conta;
}());
var primeiraConta = new Conta(1, 'Thamiris', 1000000000000);
console.log(primeiraConta);
