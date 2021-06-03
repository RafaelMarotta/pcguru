$("#registraUsuario").click(function (event) {
  event.preventDefault()
  if (this.form.reportValidity()) {
    doRegister()
  }
})

function doRegister() {
  var nome = document.getElementById("nomeForm");
  var email = document.getElementById("emailForm");
  var senha = document.getElementById("senhaForm");
  var confirmarSenha = document.getElementById("confirmarSenhaForm");

  try {
    var dados = JSON.parse(localStorage.getItem("dadosUser"));
  } catch (ex) {
    localStorage.setItem("dadosUser", "[]");
    dados = [];
  }

  if (dados === null) {
    localStorage.setItem("dadosUser", "[]");
    dados = [];
  }

  var auxRegistro = {
    nome: nome.value,
    email: email.value,
    senha: senha.value,
    confirmarSenha: confirmarSenha.value,
  };

  dados.push(auxRegistro);
  localStorage.setItem("dadosUser", JSON.stringify(dados));

  doLogin(auxRegistro.email, auxRegistro.senha)
}