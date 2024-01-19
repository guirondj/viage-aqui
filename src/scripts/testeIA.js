const cidades = {
    cidade: document.querySelector(".cidades"),
    litoral: document.querySelector('.litorais'),
};

const capitais = [
    "São Paulo",
    "Rio de Janeiro",
    "Salvador",
    "Fortaleza"
];

const litorais = [
    "Litoral Norte",
    "Litoral Sul",
];

let openCidade = null;

for (let i = 0; i < capitais.length; i++) {
    let box = document.createElement("a");
    box.className = "cidade";
    box.innerHTML = capitais[i];
    box.onclick = handleClickCidade;
    cidades.cidade.appendChild(box);
}

function handleClickCidade() {
    const clickedCidade = this;

    // Se já clicou na mesma cidade, esconde os litorais
    if (openCidade === clickedCidade) {
        hideLitorais();
        openCidade = null;
    } else {
        // Se clicou em uma nova cidade, exibe os litorais correspondentes
        openCidade = clickedCidade;
        showLitorais();
    }
}

function showLitorais() {
    cidades.litoral.innerHTML = ""; // Limpa a lista de litorais antes de exibir novos
    for (let i = 0; i < litorais.length; i++) {
        const itemLitoral = document.createElement("a");
        itemLitoral.textContent = `${litorais[i]}`;
        cidades.litoral.appendChild(itemLitoral);
    }
}

function hideLitorais() {
    cidades.litoral.innerHTML = ""; // Limpa a lista de litorais para escondê-los
}
