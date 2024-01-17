"use strict";
class Corredor {
    constructor(nome, pace) {
        this.nome = nome;
        this.pace = pace;
    }
    correr() {
        if (this.nome === 'Thamiris') {
            console.log(`A corredora ${this.nome} Adriano, tem o pace de ${this.pace}`);
        }
        else
            (console.log(`O corredor ${this.nome}, tem o pace de ${this.pace}`));
    }
}
class CorridaDeRua {
    constructor() {
        this.corredores = [];
    }
    inserirCorredor(run) {
        this.corredores.push(run);
    }
    listarCorredores() {
        this.corredores.forEach(run => run.correr());
    }
}
const tribuna = new CorridaDeRua();
tribuna.inserirCorredor(new Corredor("Thiago", 6));
tribuna.inserirCorredor(new Corredor("Rafael", 7));
tribuna.inserirCorredor(new Corredor("Thamiris", 5));
tribuna.listarCorredores();
const saosilvestre = new CorridaDeRua();
saosilvestre.inserirCorredor(new Corredor('Maria', 6));
saosilvestre.inserirCorredor(new Corredor('João', 8));
saosilvestre.listarCorredores();
