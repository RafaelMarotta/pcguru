
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"))
$("#nome").val(usuarioLogado.nome)
$("#email").val(usuarioLogado.email)

function deletaConta(email) {
    var resposta = confirm("Tem certeza de que deseja excluir a sua conta?");
    if (resposta) {
        usuarios = JSON.parse(localStorage.getItem("dadosUser"));
        usuarios = usuarios.filter(naoEhUsuarioLogado)
        localStorage.setItem('dadosUser', JSON.stringify(usuarios))
        localStorage.removeItem('usuarioLogado')
        window.location.href = "index.html";
    }
}

function naoEhUsuarioLogado(usuario) {
    return usuarioLogado.email != usuario.email
}