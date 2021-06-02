function logar(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    
    if(email.value == "admin@admin.com" && senha.value == "admin"){
        localStorage.setItem("acesso", true);
        alert('Usuário Logado no Sistema!');
        window.location.href = "index.html";
    }else{
        alert('Usuário ou senha inválidos!');
    }
}