function soma ( a,b ){
    console.log(a + b )
}
soma (3, 7)

function saudacao (){
    console.log ("oi, bem vind*!")

}
saudacao ()

function media ( a,b,c){
    console.log ((a + b + c)/3)
}
media (4, 4, 2)

function maiornumero (a,b){
    console.log ( a > b ? a:b)
}
maiornumero ( 7, 8)

function mudartexto(){
    document.getElementById("mensagem").innerText = "Texto alterado"
}

function mudarFonte(){
    document.body.style.fontFamily = "Verdana"
}

function mudarFundo(){
    document.body.style.background = "Pink";
}

function exibirAlerta(){
    alert("Tenha um bom dia <3!")
}

function Restaurar(){
    document.body.style.backgroundColor = "white"
    document.body.style.fontFamily = ""
    document.getElementById("mensagem").innerText = "bom dia!"
}
