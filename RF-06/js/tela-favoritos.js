const urlParams = new URLSearchParams(window.location.search);
const categoria = urlParams.get('categoria')
loadIndicacoes()

async function loadIndicacoes() {
    const indicacoes = filterCategoriaSelected(await fetch('./JSON/computadores.json')
        .then(response => response.json()))
    appendIndicacoes('<p class="text-danger mt-2"> Ops, você ainda não tem posts marcados como favoritos!</p>', indicacoes)
}

function filterCategoriaSelected(json) {
    return json.indicacoes.filter(isCategoriaSelected)
}

function isCategoriaSelected(indicacao) {
    return localStorage.getItem(indicacao.id) != null
}