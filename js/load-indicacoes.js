async function appendIndicacoes(notFoundMessage, indicacoes) {
    const cardIndicacao = await fetch("./components/card-indicacao.html")
        .then(response => response.text())

    indicacoes.forEach(element => {
        appendIndicacao(cardIndicacao, element)
    });

    if (indicacoes.length == 0) {
        $("#cards-indicacoes").append(notFoundMessage)
    }

}

async function appendIndicacao(cardIndicacao, json) {
    let containerIndicacao = '<div class="card card-indicacao m-3 p-2" id="${id}">${template}</div>'
    containerIndicacao = containerIndicacao.replace("${template}", cardIndicacao)

    containerIndicacao = containerIndicacao.replace("${processador}", json.processador)
    containerIndicacao = containerIndicacao.replace("${placaMae}", json.placaMae)
    containerIndicacao = containerIndicacao.replace("${placaDeVideo}", json.placaDeVideo)
    containerIndicacao = containerIndicacao.replace("${armazenamento}", json.armazenamento)
    containerIndicacao = containerIndicacao.replace("${memoriaRAM}", json.memoriaRAM)
    containerIndicacao = containerIndicacao.replace("${gabinete}", json.gabinete)

    containerIndicacao = containerIndicacao.replace("${imagemComputador}", json.imagemComputador)
    containerIndicacao = containerIndicacao.replace("${lojaImagem}", json.lojaImagem)
    containerIndicacao = containerIndicacao.replaceAll("${linkLoja}", json.linkLoja)

    containerIndicacao = containerIndicacao.replace("${preco}", json.preco)
    containerIndicacao = containerIndicacao.replace("${noCartao}", json.noCartao)
    containerIndicacao = containerIndicacao.replace("${nota}", getNotaHtml(json.nota))

    containerIndicacao = containerIndicacao.replace("${favorito}", getBtnFavoritoHtml(json.id))
    containerIndicacao = containerIndicacao.replaceAll("${id}", json.id)
    $("#cards-indicacoes").append(containerIndicacao)
}

function getBtnFavoritoHtml(id) {
    if (localStorage.getItem(id) == null) {
        return '<i class="fa fa-2x fa-heart btn-like" onclick="likeOrUnlike(${id}, this)"></i>'
    }

    return '<i class="fa fa-2x fa-heart btn-unlike" onclick="likeOrUnlike(${id}, this)"></i>'
}

function likeOrUnlike(id, caller) {
    if (localStorage.getItem(id) == null) {
        localStorage.setItem(id, "true")
        $(caller).addClass("btn-unlike")
        $(caller).removeClass("btn-like")
    } else {
        $(caller).addClass("btn-like")
        $(caller).removeClass("btn-unlike")
        localStorage.removeItem(id)
    }
}

function getNotaHtml(nota) {
    html = ""
    for (i = 0; i < nota; i++) {
        html = html + '<i class="fa fa-2x fa-star"></i>'
    }

    for (i = nota; i < 5; i++) {
        html = html + '<i style="color:#9E9C9C" class="fa fa-2x fa-star"></i>'
    }

    return html
}