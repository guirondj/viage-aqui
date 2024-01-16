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
    cidade:{
        sp:document.querySelector(".cidade"),
    }
};

const litorias = [
    "Litoral Norte",
    "Litoral Sul",
];

function addLitoral(){
    cidades.cidade.sp
    
    if(document.getElementsByClassName(cidades.cidade.sp) == document.getElementsByClassName(cidades.cidade.sp) ){

        cidades.cidade.sp.classList.add('litorais');

        criaLiLitoral();
    }

    cidades.cidade.sp.addEventListener("click" , removeLirotal)
};

function removeLirotal(){

    cidades.cidade.sp.classList.remove('litorais');

}

 function criaLiLitoral(){

     for(let i= 0; i < litorias.length; i++){
         const itemLitoral = document.createElement("li");
         itemLitoral.textContent = `${litorias[i]}`
         const texLitoral = document.createTextNode("");

         itemLitoral.appendChild(texLitoral);

         document.querySelector(".litorais").appendChild(itemLitoral);
     };
   
 };

