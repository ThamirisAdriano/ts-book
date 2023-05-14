var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Conta3 = /** @class */ (function () {
    function Conta3(numeroDaConta, titular, saldo) {
        this.numeroDaConta = ++Conta3.ultimaConta;
        this.titular = titular;
        this.saldo = saldo;
    }
    Conta3.prototype.consultaSaldo = function () {
        return "O seu saldo atual \u00E9 de R".concat(this.saldo);
    };
    Conta3.prototype.adicionaSaldo = function (saldo) {
        this.saldo += saldo;
    };
    Conta3.prototype.sacarDoSaldo = function (saldo) {
        this.saldo -= saldo;
    };
    Conta3.ultimaConta = 0;
    return Conta3;
}());
var ContaPF3 = /** @class */ (function (_super) {
    __extends(ContaPF3, _super);
    function ContaPF3(cpf, numeroDaConta, titular, saldo) {
        var _this = _super.call(this, numeroDaConta, titular, saldo) || this;
        _this.cpf = cpf;
        return _this;
    }
    return ContaPF3;
}(Conta3));
var ContaPJ3 = /** @class */ (function (_super) {
    __extends(ContaPJ3, _super);
    function ContaPJ3(cnpj, numeroDaConta, titular, saldo) {
        var _this = _super.call(this, numeroDaConta, titular, saldo) || this;
        _this.cnpj = cnpj;
        return _this;
    }
    return ContaPJ3;
}(Conta3));
var pessoaFisica3 = new ContaPF3(353, 1, "José Silva", 1000);
var pessoaJuridica3 = new ContaPJ3(318, 2, "Maria Santos", 10000);
console.log(pessoaFisica3);
console.log(pessoaJuridica3);
