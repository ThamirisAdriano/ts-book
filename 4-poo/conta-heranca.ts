class Conta2 {
    numeroDaConta: number;
    titular: string;
    saldo: number;

    constructor(numeroDaConta: number, titular: string, saldo: number){
        this.numeroDaConta = numeroDaConta;
        this.titular = titular;
        this.saldo = saldo;
    }

    consultaSaldo(): string {
        return `O seu saldo atual é de R${this.saldo}`;
    }

    adicionaSaldo(saldo:	number):	void	{
        this.saldo	+=	saldo;
    }

    sacarDoSaldo(saldo:	number):	void	{
        this.saldo	-=	saldo;
}
}

class ContaPF1 extends Conta2 {}
class ContaPJ1 extends Conta2 {}


const pessoaFisica = new ContaPF1(1,	"José Silva",	1000);
const pessoaJuridica = new ContaPJ1(1,	"Maria Santos",	10000);

console.log(pessoaFisica)
console.log(pessoaJuridica)

class ContaPF2 extends Conta2{
    cpf: number;

    constructor(cpf: number, numeroDaConta: number, titular: string, saldo: number){
        super(numeroDaConta, titular, saldo);
        this.cpf = cpf;
    }
}

//Note	 que	 nós	 temos	 uma	 nova	 palavra	 no	 nosso	 código,	 a
//palavra	 reservada	 	super	.	 Ela	 é	 utilizada	 para	 passar	 os	 valores
//que	estamos	recebendo	via	construtor	para	o	construtor	da	nossa
//classe	pai


class ContaPJ2 extends Conta2{
    cnpj: number;

    constructor(cnpj: number, numeroDaConta: number, titular: string, saldo: number){
        super(numeroDaConta, titular, saldo);
        this.cnpj = cnpj;
    }
}