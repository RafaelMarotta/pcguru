loadFooter()
async function loadFooter() {
    const footer = await fetch("./components/footer.html")
        .then(response => response.text())
    $("body").append(footer)
}