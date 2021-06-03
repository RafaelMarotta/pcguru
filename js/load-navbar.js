loadNavbar()
async function loadNavbar() {
    const navbar = await fetch("./components/navbar.html")
        .then(response => response.text())
    $("main").before(navbar)
    usuarioEstaLogado = localStorage.getItem('usuarioLogado') != null
    if (!usuarioEstaLogado) {
        $("#minhaContaHabilitado").hide()
    } else {
        $("#minhaContaDesabilitado").hide()
    }
}