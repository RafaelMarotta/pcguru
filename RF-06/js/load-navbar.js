loadNavbar()
async function loadNavbar() {
    const navbar = await fetch("./components/navbar.html")
        .then(response => response.text())
    $("main").before(navbar)
}