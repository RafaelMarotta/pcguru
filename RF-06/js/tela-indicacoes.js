const urlParams = new URLSearchParams(window.location.search);
const categoria = urlParams.get('categoria')
loadIndicacoes()

async function loadIndicacoes() {
    const indicacoes = filterCategoriaSelected(await fetch('./JSON/computadores.json')
        .then(response => response.json()))
    appendIndicacoes('<p class="text-danger mt-2"> Ops, não consegui encontrar resultados para o filtro selecionado</p>', indicacoes)
}

function filterCategoriaSelected(json) {
    return json.indicacoes.filter(isCategoriaSelected)
}

function isCategoriaSelected(indicacao) {
    return indicacao.categoria == categoria
}