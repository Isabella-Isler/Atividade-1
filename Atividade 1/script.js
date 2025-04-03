
let titulo = document.getElementById("titulo");
console.log("Selecionado pelo ID:", titulo);

let esportesPorClasse = document.getElementsByClassName("esporte");
console.log("Selecionado pela Classe:", esportesPorClasse[0].textContent);

//
let esportesPorTag0 = document.getElementsByTagName("li");
console.log("Selecionado pela Tag:", esportesPorTag0[0].textContent);

let esportesPorTag1 = document.getElementsByTagName("li");
console.log("Selecionado pela Tag:", esportesPorTag1[1].textContent);

let esportesPorTag2 = document.getElementsByTagName("li");
console.log("Selecionado pela Tag:", esportesPorTag2[2].textContent);

let esportesPorTag3 = document.getElementsByTagName("li");
console.log("Selecionado pela Tag:", esportesPorTag3[3].textContent);

let esportesPorTag4 = document.getElementsByTagName("li");
console.log("Selecionado pela Tag:", esportesPorTag4[4].textContent);

let esportesPorTag5 = document.getElementsByTagName("li");
console.log("Selecionado pela Tag:", esportesPorTag5[5].textContent);

//
let primeiroEsporte = document.querySelector(".esporte");
console.log("Selecionado pelo querySelector:", primeiroEsporte.textContent);

let todosEsportes = document.querySelectorAll(".esporte");
console.log("Selecionado pelo querySelectorAll:", todosEsportes);

let novaOpcao = document.createElement("li");
novaOpcao.textContent = "Natação";
novaOpcao.classList.add("esporte");
document.querySelector("ul").appendChild(novaOpcao);

// Alterando o texto e a cor do título
let titulo1 = document.getElementById("titulo");
titulo.innerText = "Meus Esportes Favoritos";
titulo.style.color = "blue";


