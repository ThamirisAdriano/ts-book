"use strict";
//tipos	genéricos	só	podem	ser criados	com	interfaces	ou	classes
//Função Genérica
function funcaoGenerica(value) {
    return value;
}
console.log(funcaoGenerica(1));
console.log(funcaoGenerica('Hello!'));
function funcaoGenerica2(args1, args2, args3) {
    return args1;
}
console.log(funcaoGenerica2('hello', 1, true));
//Classe genérica
class classeGenerica {
    constructor() {
        this.arr = [];
    }
    adicionarValor(item) {
        this.arr.push(item);
    }
    retornaValores() {
        return this.arr;
    }
}
let classeGenerica1 = new classeGenerica();
classeGenerica1.adicionarValor(4);
console.log(classeGenerica1.retornaValores());
let classeGenerica2 = new classeGenerica();
classeGenerica2.adicionarValor(true);
console.log(classeGenerica2.retornaValores());
class classeGenerica5 {
    constructor() {
        this.arr = [];
    }
    adicionaValor(item) {
        this.arr.push(item);
    }
    retornaValores() {
        return this.arr;
    }
    removeItem(item) {
        let index = this.arr.indexOf(item);
        if (index > -1)
            this.arr.splice(index, 1);
    }
}
let classeGenericaB = new classeGenerica5();
classeGenericaB.adicionaValor(1);
classeGenericaB.adicionaValor(2);
classeGenericaB.adicionaValor(3);
console.log(classeGenericaB.retornaValores());
classeGenericaB.removeItem(1);
console.log(classeGenericaB.retornaValores());
