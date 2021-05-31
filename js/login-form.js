function logar(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    
    if(email.value == "admin@admin.com" && senha.value == "admin"){
        localStorage.setItem("acesso", true);
        window.location.href = "indicacoes.html?categoria=home-office";
    }else{
        alert('Usuário ou senha inválidos!');
    }
}