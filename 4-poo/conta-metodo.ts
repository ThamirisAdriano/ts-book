class Conta1 {
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

const primeiraConta1 = new Conta1(1, 'Thamiris', 1000000000000);
primeiraConta1.adicionaSaldo(500); // Adiciona R$ 500 ao saldo
primeiraConta1.sacarDoSaldo(200); // Saca R$200 do saldo

console.log(primeiraConta1)

