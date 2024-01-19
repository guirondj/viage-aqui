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
         cidades: document.querySelector(".cidades"),
         litoral:document.querySelector('.litorais'),
     }
 };

 const capitais = [
     "São Paulo",
     "Rio de Janeira",
     "Salvador",
     "Fortaleza"
 ]

 const litorias = [
     "Litoral Norte",
     "Litoral Sul",
 ];

 let openlitoral = [];

 for(let i =0; i < capitais.length; i++){
     let box= document.createElement("a");
     box.className = "cidade";
     box.innerHTML = capitais[i];
     box.onclick = hanleClick;
     document.querySelector(".cidades").appendChild(box);
 }

 function hanleClick() {
     if(openlitoral.length < 2){
         criaLiLitoral();
         openlitoral.push(this);
     }

     if(capitais.length == 2){
           removeCidade();
     }
 }


 function criaLiLitoral(){

     for(let i= 0; i < litorias.length; i++){
         const itemLitoral = document.createElement("a");
         itemLitoral.textContent = `${litorias[i]}`
         const texLitoral = document.createTextNode("");

         itemLitoral.appendChild(texLitoral);

         document.querySelector(".litorais").appendChild(itemLitoral);
     };
  
 };

 function removeLirotal(){

     cidades.cidade.litoral.classList.remove("litorais");
 };