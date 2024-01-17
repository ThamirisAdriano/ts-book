class Livro {
    titulo: string;
    anoPublicacao: number;

    constructor(titulo: string, anoPublicacao: number) {
        this.titulo = titulo;
        this.anoPublicacao = anoPublicacao;
    }

    exibirDetalhes() {
        console.log(`Livro: ${this.titulo}, publicado em ${this.anoPublicacao}.`);
    }
}

const livroFavorito = new Livro("O Nome do Vento", 2007); //instancia
livroFavorito.exibirDetalhes();

class Biblioteca {
    livros: Livro[];

    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro: Livro) {
        this.livros.push(livro);
    }

    removerLivro(titulo: string) {
        this.livros = this.livros.filter(livro => livro.titulo !== titulo);
    }

    listarLivros() {
        console.log("Livros na Biblioteca:");
        this.livros.forEach(livro => livro.exibirDetalhes());
    }
}

const minhaBiblioteca = new Biblioteca();
minhaBiblioteca.adicionarLivro(new Livro("O Nome do Vento", 2007));
minhaBiblioteca.adicionarLivro(new Livro("O temor do Sábio", 2011));

minhaBiblioteca.listarLivros();

//minhaBiblioteca.removerLivro("A Wise Man's Fear");

//minhaBiblioteca.listarLivros();