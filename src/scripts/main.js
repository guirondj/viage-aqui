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
  
  function handleClick(){
  }

// observa o que acontece ao clicar nas cidade 

  const cidadeCriaLitoral = document.querySelector('.cidade');

  cidadeCriaLitoral.addEventListener("click", function (){
    createLitorais(); 

});

//Adiciona os litorais nas cidades 

 function createLitorais() {
   // Remova os litorais existentes antes de adicionar novos
   //removeLitorais();

   for (let i = 0; i < litorias.length; i++) {
     const itemLitoral = document.createElement("a");
     itemLitoral.className = "litorais"
     itemLitoral.textContent = `${litorias[i]}`;
     document.querySelector(".cidade").appendChild(itemLitoral);
   };

 };

 function removeLitorais(){
  // Remova a classe "litorais" para ocultar os litorais
  let lts = document.getElementsByClassName("litorais");
  for(let i= 0; i < lts.length; i - lts.length){
    lts[i].remove()
  };
 }