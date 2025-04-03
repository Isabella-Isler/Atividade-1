// //Buscando elementos por id
let titulo = document.getElementById("titulo");
// console.log(titulo);

// //Buscando elemntos por classe
// let descricao = document.getElementsByClassName("descricao");
// console.log(descricao[0]);

// //Selecionando pelo nome Tag
// let paragrafo = document.getElementsByIdTagName("p");
// console.log(paragrafo[0]);

// //Selecionando pelo Query Selector
// //o "#" significa ID -> O nome do ID é titulo
// //"." significa -> O nome da classe é descricao
// let tituloQS = document.querySelector("#titulo");
// let paragrafoQS = document.querySelector(".descricao")
// console.log("Exibindo com Query Selector" + tituloQS);
// console.log("Exibindo com QS o paragrafo " + paragrafoQS[0]);

//Alterando o style de um elemento
titulo.innerText = "Novo Título para nosso H1"
titulo.innerHTML = "<span style = 'color:white'> Titulo em vermelho </span>";

//Alterando o style de um elemnto em js
titulo.style.backgroundColor = "black"; //Fundo preto
titulo.style.fontSize = "50px"//Aumenta o tamanho da fonte

//Adicionar um novo elemeneto
let novoParagrafo = document.createElement("p");
novoParagrafo.innerText = "Esse é um novo parágrafo";

//Adicionando um novo paragráfo ao body
document.body.appendChild(novoParagrafo);

//Removendo elementos do DOM com JS removeChild
let elemenetoParaRemover = document.querySelector(".descricao");
document.body.removeChild(elemenetoParaRemover);
