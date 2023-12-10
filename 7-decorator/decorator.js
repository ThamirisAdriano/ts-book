"use strict";
//declaração que pode ser anexada numa classe, método, parâmetro, acesso..
//trabalha em cima das partes anotadas para que seja possível adicionar novas coisas, vigia as marcações para que possa adicionar um elemento novo, fazer uma validação..
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
function analisaSaldo(target, key, description) {
}
let ContaDecorator = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _consultaSaldo_decorators;
    return _a = class ContaDecorator {
            get numeroDaConta() {
                return this._numeroDaConta;
            }
            constructor(titular, saldo) {
                this._numeroDaConta = (__runInitializers(this, _instanceExtraInitializers), void 0);
                this._numeroDaConta = ++_a.ultimaConta;
                this.titular = titular;
                this._saldo = saldo;
            }
            consultaSaldo() {
                return `O seu saldo atual é: ${this._saldo}`;
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _consultaSaldo_decorators = [analisaSaldo];
            __esDecorate(_a, null, _consultaSaldo_decorators, { kind: "method", name: "consultaSaldo", static: false, private: false, access: { has: obj => "consultaSaldo" in obj, get: obj => obj.consultaSaldo }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a.ultimaConta = 0,
        _a;
})();
console.log(analisaSaldo);
let MinhaClasse = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _minhaPropriedade_decorators;
    let _minhaPropriedade_initializers = [];
    return _a = class MinhaClasse {
            constructor() {
                this.minhaPropriedade = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _minhaPropriedade_initializers, void 0));
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _minhaPropriedade_decorators = [meuDecorator];
            __esDecorate(null, null, _minhaPropriedade_decorators, { kind: "field", name: "minhaPropriedade", static: false, private: false, access: { has: obj => "minhaPropriedade" in obj, get: obj => obj.minhaPropriedade, set: (obj, value) => { obj.minhaPropriedade = value; } }, metadata: _metadata }, _minhaPropriedade_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
function meuDecorator(target, propertyKey) {
    console.log(target); // Exibe o protótipo da classe (MinhaClasse)
    console.log(propertyKey); // Exibe o nome da propriedade ("minhaPropriedade")
}
