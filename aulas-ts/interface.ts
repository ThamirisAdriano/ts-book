// Define uma interface chamada 'Quimico'.
interface Quimico {
    nome: string; // Propriedade 'nome', que é uma string.
    calcularMassaMolar: (formula: string) => number; // Método 'calcularMassaMolar', que recebe uma string e retorna um número.
}

// Define uma classe 'Bioquimico' que implementa a interface 'Quimico'.
class Bioquimico implements Quimico {
    nome: string; // Propriedade 'nome' herdada da interface 'Quimico'.

    // Construtor da classe. Define o nome do bioquímico.
    constructor(nome: string) {
        this.nome = nome; // Atribui o nome passado como argumento à propriedade 'nome'.
    }

    // Implementação do método 'calcularMassaMolar' da interface 'Quimico'.
    calcularMassaMolar(formula: string): number {
        // Um objeto para mapear os elementos para suas massas atômicas.
        const massasAtomicas: { [elemento: string]: number } = {
            'H': 1, // Hidrogênio
            'C': 12, // Carbono
            'O': 16, // Oxigênio
            'N': 14  // Nitrogênio
        };

        let massaMolar = 0; // Variável para armazenar a massa molar calculada.
        // Essa expressão regular é uma ferramenta para decompor fórmulas químicas em seus componentes básicos, 
        //permitindo que o programa identifique e processe cada elemento e sua quantidade.
        const regex = /([A-Z][a-z]*)(\d*)/g;
        let match; // Variável para armazenar os resultados da correspondência da regex.

        // Loop para processar cada correspondência da regex na fórmula.
        while ((match = regex.exec(formula)) !== null) {
            const elemento = match[1]; // O elemento químico (ex: 'H').
            const quantidade = parseInt(match[2] || '1'); // Quantidade do elemento na fórmula, padrão é 1 se não especificado.
            // Calcula a massa molar se o elemento é conhecido.
            if (massasAtomicas[elemento]) {
                massaMolar += massasAtomicas[elemento] * quantidade;
            } else {
                // Lança um erro se o elemento não for encontrado.
                throw new Error(`Elemento desconhecido: ${elemento}`);
            }
        }
        return massaMolar; // Retorna a massa molar calculada.
    }

    // Método adicional para calcular a massa molar e retornar uma string formatada.
    calcularEMostrarMassaMolar(formula: string): string {
        const massaMolar = this.calcularMassaMolar(formula); // Chama o método 'calcularMassaMolar'.
        // Retorna uma string formatada com o nome do bioquímico, a fórmula e a massa molar calculada.
        return `O bioquímico ${this.nome} calculou a massa do ${formula} e chegou ao número de ${massaMolar}`;
    }
}

// Cria uma instância da classe 'Bioquimico' chamada 'bioquimico'.
let bioquimico = new Bioquimico("Maria");
// Exibe no console a string formatada retornada pelo método 'calcularEMostrarMassaMolar'.
console.log(bioquimico.calcularEMostrarMassaMolar("H2O")); 
