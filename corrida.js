var Corredor = /** @class */ (function () {
    function Corredor(nome, pace) {
        this.nome = nome;
        this.pace = pace;
    }
    Corredor.prototype.correr = function () {
        if (this.nome === 'Thamiris') {
            console.log("A corredora ".concat(this.nome, " Adriano, tem o pace de ").concat(this.pace));
        }
        else
            (console.log("O corredor ".concat(this.nome, ", tem o pace de ").concat(this.pace)));
    };
    return Corredor;
}());
var CorridaDeRua = /** @class */ (function () {
    function CorridaDeRua() {
        this.corredores = [];
    }
    CorridaDeRua.prototype.inserirCorredor = function (run) {
        this.corredores.push(run);
    };
    CorridaDeRua.prototype.listarCorredores = function () {
        this.corredores.forEach(function (run) { return run.correr(); });
    };
    return CorridaDeRua;
}());
var tribuna = new CorridaDeRua();
tribuna.inserirCorredor(new Corredor("Thiago", 6));
tribuna.inserirCorredor(new Corredor("Rafael", 7));
tribuna.inserirCorredor(new Corredor("Thamiris", 5));
tribuna.listarCorredores();
var saosilvestre = new CorridaDeRua();
saosilvestre.inserirCorredor(new Corredor('Maria', 6));
saosilvestre.inserirCorredor(new Corredor('João', 8));
saosilvestre.listarCorredores();
