const urlParams = new URLSearchParams(window.location.search);
const categoria = urlParams.get('categoria')
loadIndicacoes()

async function loadIndicacoes() {
    const indicacoes = filterCategoriaSelected(await fetch('./JSON/computadores.json')
        .then(response => response.json()))
    appendIndicacoes(indicacoes)
}

function filterCategoriaSelected(json) {
    return json.indicacoes.filter(isCategoriaSelected)
}

function isCategoriaSelected(indicacao) {
    return localStorage.getItem(indicacao.id) != null
}