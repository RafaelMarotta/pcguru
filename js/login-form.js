$("#btnEntrar").click(function (event) {
    event.preventDefault()
    if (this.form.reportValidity()) {
        var email = document.getElementById("email").value;
        var senha = document.getElementById("senha").value;
        doLogin(email, senha)
    }
})

function doLogin(email, senha) {
    var dados = JSON.parse(localStorage.getItem("dadosUser"));

    var usuarioLogado = dados.filter(function (user) {
        return user.email == email && user.senha == senha
    });

    if (usuarioLogado.length > 0) {
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado[0]));
        window.location.href = "index.html";
    } else {
        $(".error-message").removeClass("d-none")
    }
}