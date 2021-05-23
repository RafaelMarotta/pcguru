async function appendIndicacoes(indicacoes) {
    const cardIndicacao = await fetch("./components/card-indicacao.html")
    .then(response => response.text())

    indicacoes.forEach(element => {
        appendIndicacao(cardIndicacao, element)
    });

}

async function appendIndicacao(cardIndicacao, json) {
    let containerIndicacao = '<div class="card card-indicacao m-3 p-2" id="${id}">${template}</div>'
    containerIndicacao = containerIndicacao.replace("${id}", json.id)
    containerIndicacao = containerIndicacao.replace("${template}", cardIndicacao)
    
    containerIndicacao = containerIndicacao.replace("${processador}", json.processador)
    containerIndicacao = containerIndicacao.replace("${placaMae}", json.placaMae)
    containerIndicacao = containerIndicacao.replace("${placaDeVideo}", json.placaDeVideo)
    containerIndicacao = containerIndicacao.replace("${armazenamento}", json.armazenamento)
    containerIndicacao = containerIndicacao.replace("${memoriaRAM}", json.memoriaRAM)
    containerIndicacao = containerIndicacao.replace("${gabinete}", json.gabinete)
    
    containerIndicacao = containerIndicacao.replace("${imagemComputador}", json.imagemComputador)
    containerIndicacao = containerIndicacao.replace("${lojaImagem}", json.lojaImagem)
    containerIndicacao = containerIndicacao.replace("${linkLoja}", json.linkLoja)

    containerIndicacao = containerIndicacao.replace("${preco}", json.preco)
    containerIndicacao = containerIndicacao.replace("${noCartao}", json.noCartao)
    containerIndicacao = containerIndicacao.replace("${nota}", getNotaHtml(json.nota))

    containerIndicacao = containerIndicacao.replace("${favorito}", getBtnFavoritoHtml())

    $("#cards-indicacoes").append(containerIndicacao)
}

function getBtnFavoritoHtml() {
    return '<i style="color:#9E9C9C;cursor:pointer;" '+
    'class="fa fa-2x fa-heart"></i>'
}

function getNotaHtml(nota) {
    html = ""
    for(i = 0; i < nota; i++) {
        html = html + '<i class="fa fa-2x fa-star"></i>'
    }

    for(i = nota; i < 5; i++) {
        html = html + '<i style="color:#9E9C9C" class="fa fa-2x fa-star"></i>'
    }

    return html
}