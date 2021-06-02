function cadastraUser() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    var confirmarSenha = document.getElementById("confirmarSenha");
  
    var dados = JSON.parse(localStorage.getItem("dadosUser"));
  
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
  
    alert("Registro Incluido com Sucesso !");
  }