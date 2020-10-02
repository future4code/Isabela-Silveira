/* Exercícios de interpretação 

1) O código está estabelecendo uma condição de continuação menor que 5, essa condição começa no 0 e vai aumentando de 1 em 1. 

2) Vai imprimir os números maiores que 18

Desafio 1) o resultado seria 4

Exercícios de escrita de código
B) não é possivel acessar o indice usando for...of...

3) 


a)

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let i=0; i < arrayOriginal.length; i++) {

console.log(arrayOriginal[i])
 } 

 b)

 const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let i=0; i < arrayOriginal.length; i++) {

 console.log(arrayOriginal[i]/10)
} 

c)

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
 let pares = []

 for (let i = 0; i < arrayOriginal.length; i++) {
     if(arrayOriginal[i] % 2 === 0){ 
    pares.push(arrayOriginal[i])
 }
}
console.log(pares)

d)

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let letras = []

for (let i = 0; i <arrayOriginal.length; i++){
    letras.push(`O elemento do index ${i} é: ${arrayOriginal[i]}`)
    console.log(letras[i])
 }

e)

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let valorMaximo = arrayOriginal[0]
let valorMinimo = arrayOriginal[0]

for (let i = 0; i < arrayOriginal.length; i++) {
    if(arrayOriginal[i] > valorMaximo) {
        valorMaximo = arrayOriginal[i]
    }
    if (arrayOriginal[i] < valorMaximo)
}

console.log(`O maior número é ${valorMaximo} e o menor número é ${valorMinimo}`) 

Desafio 2:

const numero = Number(prompt("Escolha um número"))
console.log("Vamos jogar!")

let numero2 = Number(prompt("Adivinhe um número"))
console.log(`O número chutado foi: ${numero2}`)

let armazenarNum = 1

while(numero !== numero2) {
    armazenarNum ++
    
    if (numero2 < numero) {
        console.log("Você digitou um número menor")
    } else {
        console.log("Você digitou um número maior")
    }
    numero2 = Number(prompt("Adivinhe  um número"))
    console.log(`O número chutado foi: ${numero2}`)
     
}


console.log("Acertou")
console.log(`O número de tentativas foi: ${armazenarNum}`)


const numero = Math.floor((Math.random()*100)+1)


let numero2 = Number(prompt("Adivinhe um número"))
console.log(`O número chutado foi: ${numero2}`)

let armazenarNum = 1

while(numero !== numero2) {
    armazenarNum ++
    
    if (numero2 < numero) {
        console.log("Você digitou um número menor")
    } else {
        console.log("Você digitou um número maior")
    }
    numero2 = Number(prompt("Adivinhe  um número"))
    console.log(`O número chutado foi: ${numero2}`)
     
}


console.log("Acertou")
console.log(`O número de tentativas foi: ${armazenarNum}`)
*/