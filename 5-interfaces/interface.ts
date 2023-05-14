interface Pessoa {
    nome: string;
    idade: number;
    email: string;
    telefone: number
}

let pessoa: Pessoa;
let pessoa2: Pessoa;

// Neste	 exemplo,	 o	 tipo	 	 PessoaJuridica	 	 estende	 as propriedades
// 		nome	,		idade	,		email		 e	 	telefone		 da	interface
// 	IPessoa	,	e	declara	duas	novas	propriedades:		conta		e		cnpj	.

interface PessoaJuridica extends Pessoa {
    conta: number;
    cnpj: number;
}

//opcional - usar ? Ex: 

interface Ipessoa {
    nome: string;
    idade: number;
    email: string;
    telefone?: number

}



  