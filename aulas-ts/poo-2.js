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
var Animal = /** @class */ (function () {
    function Animal(especie) {
        this.especie = especie;
    }
    Animal.prototype.getEspecie = function () {
        return this.especie;
    };
    Animal.prototype.fazerSom = function () {
        console.log("O animal faz um som."); // Método geral para qualquer animal fazer um som.
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cachorro.prototype.fazerSom = function () {
        console.log("O cachorro late."); // Especificação do método para um cachorro, substituindo o método geral.
    };
    return Cachorro;
}(Animal));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gato.prototype.fazerSom = function () {
        console.log("O gato mia."); // Especificação do método para um gato, substituindo o método geral.
    };
    return Gato;
}(Animal));
var meuAnimal = new Cachorro("Maurício corno");
console.log(meuAnimal.getEspecie());
meuAnimal.fazerSom(); // Chama o método "fazerSom" para um cachorro, então irá mostrar "O cachorro late."
var meuOutroAnimal = new Gato("Gato");
console.log(meuAnimal.getEspecie());
meuOutroAnimal.fazerSom(); // Chama o método "fazerSom" para um gato, então irá mostrar "O gato mia."
