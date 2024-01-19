// tela de login e cadastro

function abrirModal(){
    const modal = document.querySelector("#janela-modal");
    modal.classList.add('abrir');
    
    modal.addEventListener("click", (e)=>{
        if(e.target.id === 'fechar' || e.target.id == 'janela-modal'){
            modal.classList.remove('abrir');
    }});
};

// Parte esquerda dos litorias 

const cidades = {
    cidade: {
      cidades: document.querySelector(".cidades"),
      litoral: document.querySelector('.litorais'),
    }
  };
  
  const capitais = [
    "São Paulo",
    "Rio de Janeiro",
    "Salvador",
    "Fortaleza"
  ];
  
  const litorias = [
    "Litoral Norte",
    "Litoral Sul",
  ];
  
  let openlitoral = [];
  
  for (let i = 0; i < capitais.length; i++) {
    let box = document.createElement("a");
    box.className = "cidade";
    box.innerHTML = capitais[i];
    box.onclick = handleClick;
    document.querySelector(".cidades").appendChild(box);
  }
  
  function handleClick() {
    const isSelected = openlitoral.includes(this);
  
    if (isSelected) {
      // Cidade já selecionada, remover litorais
      removeLitorais();
      openlitoral = openlitoral.filter(city => city !== this);
    } else {
      // Cidade não selecionada, adicionar litorais
      createLitorais();
      openlitoral.push(this);
    }
  }

  function createLitorais() {
    // Remova os litorais existentes antes de adicionar novos
    removeLitorais();
  
    for (let i = 0; i < litorias.length; i++) {
      const itemLitoral = document.createElement("a");
      itemLitoral.textContent = `${litorias[i]}`;
      document.querySelector(".litorais").appendChild(itemLitoral);
    }
  
    // Adicione a classe "litorais" para torná-los visíveis
    cidades.cidade.litoral.classList.add("litorais");
  };
  
  function removeLitorais() {
    // Remova a classe "litorais" para ocultar os litorais
    cidades.cidade.litoral.classList.remove("litorais");
  
    // Remova todos os elementos filhos dos litorais
    const litoraisContainer = document.querySelector(".litorais");
    while (litoraisContainer.firstChild) {
      litoraisContainer.removeChild(litoraisContainer.firstChild);
    }
  }
  