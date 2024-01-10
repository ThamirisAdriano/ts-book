class Book{
    titulo: string;
    ano: number;

    constructor(titulo: string, ano: number){
        this.titulo = titulo;
        this.ano = ano;
    }

    exibirDetalhes(){
        console.log(`Livro: ${this.titulo}, publicado em ${this.ano}`)
    }
}

const bookFavorito = new Book("O nome do Vento", 2007)
const bookFavorito2 = new Book("O temor do Sábio", 2011)
bookFavorito.exibirDetalhes()
bookFavorito2.exibirDetalhes()