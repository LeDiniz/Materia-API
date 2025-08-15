/*DECLARANDO VARIÁVEIS*/
var a = "Afonso"; /*variável de escopo global*/
let c = 30; /*variável de escopo local (usada na função)*/
const texto = "Olá"; /*const (constante) sempre será esse valor durante a execução (escopo local)*/

console.log(a);
console.log(b);
console.log(texto);

/*FUNÇÕES*/
function soma(a,b){
    return a+b
}

console.log(soma(3,5));

/*LISTA*/
var teste = [1,2,3]

/*Exibindo toda a lista*/
console.log(teste)
/*Exibindo um elemento por posição*/
console.log(teste[0])
console.log(teste[1])
console.log(teste[2])

/*Adicionando elemento no final da lista*/
teste.push(4)
console.log(teste)

/*DICIONÁRIO*/
var aluno = {
    nome:"Afonso",
    aprovado:true
}

var alunoDois = {
    nome:"Fulano",
    aprovado:false
}

console.log(aluno,alunoDois)

/*Exibindo o valor da chave nome */
console.log(aluno.nome)

/* ARRAY DE OBJETOS*/
var alunosTres = [
    {
        nome:"Afonso",
        aprovado:true
    },
    {
        nome:"Fulano",
        aprovado:false
    },
    {
        nome:"Teste",
        aprovado:true
    }
]

console.log(alunosTres)
console.log(alunosTres[0]) /*Exibindo primeiro elemento*/
console.log(alunosTres[0].nome) /*Exibindo o valor da chave nome*/
console.log(alunosTres[0].aprovado) /*Exibindo o valor da chave aprovado*/

/*ARROW FUNCTION*/
function somaUm(x,n){
    return x+n
}

const somaDois = (a,b) =>{
    return a+b
}

console.log(somaUm(5,6))
console.log(somaDois(7,6))

var a = 5
var b = 10

function soma(a,b){
    return a +b
}

function subtracao(a,b){
    return a-b
}

function multiplicacao(a,b){
    return a*b
}

function divisao(a,b){
    return a/b
}

const somaArrow = (a,b) =>{
    return a+b
}

const subtracaoArrow = (a,b) =>{
    return a-b
}

const multiplicacaoArrow = (a,b) =>{
    return a*b
}

const divisaoArrow = (a,b) =>{
    return a/b
}

console.log(soma(a,b))
console.log(subtracao(a,b))
console.log(multiplicacao(a,b))
console.log(divisao(a,b))
console.log(somaArrow(a,b))
console.log(subtracaoArrow(a,b))
console.log(multiplicacaoArrow(a,b))
console.log(divisaoArrow(a,b))


/*EXERCÍCIO*/
// Crie um array de objtos de carros com as chaves: modelo, ano e cor e alimente com três objetos
// 1. Exiba todos os carros 2. Exiba todas as informações do primeiro carro 3. Exiba o modelo do segundo carro

var carros = [
        {
            modelo:"Palio",
            ano:2006,
            cor:"Verde"
        },
        {
            modelo:"Civic",
            ano:2025,
            cor:"Preto"
        },
        {
            modelo:"Kombi",
            ano:2013,
            cor:"Vermelho"
        },
        
    ]

console.log(carros)
console.log(carros[0])
console.log(carros[1].modelo)