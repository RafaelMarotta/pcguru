function cadastraUser() {
    var nome = document.getElementById("nomeForm");
    var email = document.getElementById("emailForm");
    var senha = document.getElementById("senhaForm");
    var confirmarSenha = document.getElementById("confirmarSenhaForm");
  
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
    console.log(auxRegistro)
  
    dados.push(auxRegistro);
    localStorage.setItem("dadosUser", JSON.stringify(dados));
  
    alert("Registro Incluido com Sucesso !");
  }