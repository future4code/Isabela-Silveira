/* Exercícios de interpretação 

1)

a) O código faz o teste de algum número.

b) Números iguais a zero.

c) Para números diferentes de 0.

2)

a) O switch é uma forma de simplificar o código, ele avalia uma expressão e executa as intruções que estão no case.

b) O preço da fruta maçã é R$ 2.25

c) Vai imprimir o default junto com a case da pêra independente do criterio ter sido correspondido ou não.

3)

a) Está pedindo ao usuário para digitar o primeiro número e ao mesmo tempo converteu a resposta em número.

b) se o número for 10 a mensagem será "Esse número passou no teste". Se o número for -10 a mensagem será "Essa mensagem é secreta!!!"

c) não ocorrerá nenhum erro, pois o escopo filho tem liberdade para alterar o escopo pai.

Exercícios de escrita de código:

4)


let idade = Number(prompt("Qual a sua idade?"))

if(idade >= 18){
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

5)


let turno = prompt("Qual turno você estuda? Digite M para matutino, V para vespertino ou N para noturno").toUpperCase()

if(turno === "M"){
    console.log("Bom dia!")
} else if(turno === "V"){
    console.log("Boa tarde!")
} else if(turno === "N"){
    console.log("Boa noite!")
} else {

}

6)


let turno = prompt("Qual turno você estuda? Digite M para matutino, V para vespertino ou N para noturno").toUpperCase()

let turno2

switch (turno) {
    case "M":
        turno2 = "Bom dia!"
        break;
    case "V": 
        turno2 = "Boa tarde!"
        break;   
    case "N": 
        turno2 = "Boa noite!" 
        break;
    default:
        turno2 = "Essa opção não existe!"
        break;
}

console.log(turno2)

7)


let generoFilme = prompt("Qual gênero de filme você vai assistir?")
let precoIngresso = prompt("Qual o valor do ingresso?")

if(generoFilme === 'fantasia' && precoIngresso < '15 reais'){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

Desafio 1:

let snack = prompt("Qual snack que você quer comprar?").toLowerCase()
console.log(`Bom filme! ... com ${snack}`)

*/

let nomeCompleto = prompt("Digite seu nome completo").toLowerCase()
let tipoDeJogo = prompt("Qual o tipo de jogo? escolha IN para internacional ou DO para doméstico ").toUpperCase()
let etapaDoJogo = prompt("Indique a etapa do jogo: use SF para semi-final, DT para a decisão de 3° lugar ou FI para a final").toUpperCase()
let categoria = prompt("Indique a categoria: 1, 2, 3 ou 4")
let quantIngressos = Number(prompt("Quantos ingressos você deseja?"))

