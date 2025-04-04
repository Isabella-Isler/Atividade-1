//Funções são blocos de códigos que podem ser chamados
function nomeDaFuncao() {
    console.log("Olá, mundo!");
}
nomeDaFuncao(); //Chamada da Função

function soma(a,b) {
    console.log(a + b);
}
soma(2, 3); //5

function somar(a, b) {
    return a + b;
}
let resultado = somar(5, 3);
console.log(resultado); //Saída: 8 
 
const multiplicar = function(a, b) {
    return a * b;
}
console.log(multiplicar(4, 2)); //Saída: 8

const dividir = (a, b) => a / b;
console.log(dividir(10, 2)); //Saída: 5
