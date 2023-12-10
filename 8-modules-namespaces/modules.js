"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contaSalario_1 = require("./contaSalario");
const contaInvestimento_1 = require("./contaInvestimento");
//namespaces aninhados - agrupamento de classes
// namespace Banco{
//     export class ContaPF extends Conta4 {}
// }
// namespace Banco{
//     export class ContaPJ extends Conta4 {}
// }
// namespace Banco{
//     export class ContaSalario extends Conta4 {}
// }
// namespace Banco{
//     export class ContaInvestimento extends Conta4 {}
// }
let novaContaInvestimento = new contaInvestimento_1.ContaInvestimento("Titular Investimento", 1000);
let novaContaSalario = new contaSalario_1.ContaSalario("Titular Investimento", 1000);
