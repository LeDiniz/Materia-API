// document.getElementById("teste").innerHTML = "olá mundo";

//enum
// const tipo ={
//     A: Symbol("Novo"),
//     B: Symbol("Usado")
// }

// array carros
// const carros = [ 
//     {
//         nome: "Corsa",
//         cor: "verde",
//         uso: tipo.B
//     },
//     {
//         nome: "Corvete",
//         cor: "vermelho",
//         uso: tipo.A
//     }
// ]

// Estrutura condicional
// const a = 17

// if (a === 5) {
//     alert("Igual a 5")
// } else if (a < 10) {
//     alert("Menor que 10")
// } else {
//     alert("Maior que 10")
// }


// if(carros[0].uso === tipo.A){
//     alert("Carro novo")
// } else if (carros[0].uso === tipo.B){
//     alert("Carro usado")
// } else {
//     alert("Opção inválida")
// }

// document.getElementById("teste").innerHTML = JSON.stringify(carros[0]);

const carros = [
    {nome:"Tesla", uso:"novo"},
    {nome:"Berlinda", uso:"usado"},
    {nome:"Fusca", uso:"usado"},
    {nome:"Uno", uso:"novo"},
    {nome:"Gol", uso:"usado"}
]

let saidaUsado="";
let saidaNovo="";

carros.forEach(copiaCarros=>{
    if(copiaCarros.uso === "novo"){
        saidaNovo += `Nome: ${copiaCarros.nome} <br>`
    }
    else if (copiaCarros.uso === "usado"){
        saidaUsado += `Nome: ${copiaCarros.nome} <br>`
    }
})

document.getElementById("carrosNovos").innerHTML += saidaNovo
document.getElementById("carrosUsados").innerHTML += saidaUsado

// Exercício 

const eventos = [
    {nome:"Festa do morango", estilo:"Gastronomia"},
    {nome:"Festa da uva", estilo:"Gastronomia"},
    {nome:"Corrida na 19", estilo:"Esportes"},
    {nome:"Beach Tennis", estilo:"Esportes"}
]

let saidaGastronomia = "";
let saidaEsportes = "";

eventos.forEach(x => {
    if (x.estilo === "Gastronomia") {
        saidaGastronomia += `Nome: ${x.nome} <br>`;
    } else if (x.estilo === "Esportes") {
        saidaEsportes += `Nome: ${x.nome} <br>`;
    }
});

document.getElementById("eventosGastronomia").innerHTML += saidaGastronomia;
document.getElementById("eventosEsportes").innerHTML += saidaEsportes;