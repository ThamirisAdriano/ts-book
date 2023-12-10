var Livro = /** @class */ (function () {
    function Livro(titulo, anoPublicacao) {
        this.titulo = titulo;
        this.anoPublicacao = anoPublicacao;
    }
    Livro.prototype.exibirDetalhes = function () {
        console.log("Livro: ".concat(this.titulo, ", publicado em ").concat(this.anoPublicacao, "."));
    };
    return Livro;
}());
var livroFavorito = new Livro("O Nome do Vento", 2007); //instancia
livroFavorito.exibirDetalhes();
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.livros = [];
    }
    Biblioteca.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
    };
    Biblioteca.prototype.removerLivro = function (titulo) {
        this.livros = this.livros.filter(function (livro) { return livro.titulo !== titulo; });
    };
    Biblioteca.prototype.listarLivros = function () {
        console.log("Livros na Biblioteca:");
        this.livros.forEach(function (livro) { return livro.exibirDetalhes(); });
    };
    return Biblioteca;
}());
var minhaBiblioteca = new Biblioteca();
minhaBiblioteca.adicionarLivro(new Livro("O Nome do Vento", 2007));
minhaBiblioteca.adicionarLivro(new Livro("O temor do Sábio", 2011));
minhaBiblioteca.listarLivros();
//minhaBiblioteca.removerLivro("A Wise Man's Fear");
//minhaBiblioteca.listarLivros();
