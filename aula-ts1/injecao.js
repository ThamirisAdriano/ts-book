var ServicoEmail = /** @class */ (function () {
    function ServicoEmail() {
    }
    ServicoEmail.prototype.enviarEmail = function (mensagem) {
        // Lógica para enviar e-mail
        console.log("Enviando e-mail:", mensagem);
    };
    return ServicoEmail;
}());
var UsuarioService = /** @class */ (function () {
    // Construtor que aceita um ServicoEmail como parâmetro
    function UsuarioService(servicoEmail) {
        this.servicoEmail = servicoEmail;
    }
    UsuarioService.prototype.registrarUsuario = function (usuario) {
        // Lógica de registro do usuário
        console.log("Registrando o usu\u00E1rio ".concat(usuario.nome));
        this.servicoEmail.enviarEmail("Bem-vindo ao nosso serviço!");
    };
    return UsuarioService;
}());
// Exemplo de uso
var servicoEmail = new ServicoEmail();
var usuarioService = new UsuarioService(servicoEmail);
// Supondo que temos um objeto 'usuario' com a propriedade 'nome'
var usuario = { nome: "João" };
usuarioService.registrarUsuario(usuario);
