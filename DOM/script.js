//Buscando elementos por id
let titulo = document.getElementById("titulo");
console.log(titulo);

//Buscando elemntos por classe
let descricao = document.getElementsByClassName("descricao");
console.log(descricao[0]);

//Selecionando pelo nome Tag
let paragrafo = document.getElementsByIdTagName("p");
console.log(paragrafo[0]);

//Selecionando pelo Query Selector
//o "#" significa ID -> O nome do ID é titulo
//"." significa -> O nome da classe é descricao
let tituloQS = document.querySelector("#titulo");
let paragrafoQS = document.querySelector(".descricao")
console.log("Exibindo com Query Selector" + tituloQS);
console.log("Exibindo com QS o paragrafo " + paragrafoQS[0]);