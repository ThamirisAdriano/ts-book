//tipos	genéricos	só	podem	ser criados	com	interfaces	ou	classes

//Função Genérica

function funcaoGenerica<T,>(value: T) {
    return value;
}

console.log(funcaoGenerica<number>(1))
console.log(funcaoGenerica<string>('Hello!'))

function funcaoGenerica2<X, Y, Z>(args1: X, args2: Y, args3: Z) {
    return args1;
}

console.log(funcaoGenerica2<string,number,boolean>('hello', 1, true))

//Classe genérica

class classeGenerica<T> {
    private arr:Array<T> = [];

    adicionarValor(item: T){
        this.arr.push(item)
    }

    retornaValores(){
        return this.arr;
    }
}

let classeGenerica1 = new classeGenerica<number>();
classeGenerica1.adicionarValor(4);
console.log(classeGenerica1.retornaValores())

let classeGenerica2 = new classeGenerica<boolean>();
classeGenerica2.adicionarValor(true);
console.log(classeGenerica2.retornaValores())

// Interface Genérica

interface InterfaceGenerica<I> {
    removeItem(item: I):void;
}

class classeGenerica5<T> implements InterfaceGenerica<T>{

    private arr:Array<T> = [];

    adicionaValor(item: T){
        this.arr.push(item)
    }

    retornaValores(){
        return this.arr;
    }

    removeItem(item: T) {
        let index = this.arr.indexOf(item);
        if (index > -1)
            this.arr.splice(index,1)
    }
}

let classeGenericaB = new classeGenerica5<number>();
classeGenericaB.adicionaValor(1);
classeGenericaB.adicionaValor(2);
classeGenericaB.adicionaValor(3);
console.log(classeGenericaB.retornaValores())
classeGenericaB.removeItem(1)
console.log(classeGenericaB.retornaValores())