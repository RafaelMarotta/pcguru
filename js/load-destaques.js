async function appendDestaques(containerId, destaques) {
    console.log(destaques)
    console.log(containerId)
    const cardDestaque = await fetch("./components/card-destaque.html")
        .then(response => response.text())

    destaques.forEach(element => {
        appendDestaque(cardDestaque, element, containerId)
    });

    if (destaques.length == 0) {
        $("#"+containerId).append("Não foram encontrados destaques")
    }

}

async function appendDestaque(cardDestaque, json, containerId) {
    cardDestaque = cardDestaque.replace("${titulo}", json.titulo)
    cardDestaque = cardDestaque.replace("${imagem}", json.imagem)
    cardDestaque = cardDestaque.replace("${descricao}", json.descricao)
    cardDestaque = cardDestaque.replace("${url}", json.url)
    console.log(cardDestaque)
    console.log(json)
    $("#"+containerId).append(cardDestaque)
}