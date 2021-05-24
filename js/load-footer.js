loadFooter()
async function loadFooter() {
    const footer = await fetch("./components/footer.html")
        .then(response => response.text())
        console.log(footer)
    $("body").append(footer)
}