/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO: 

1) Foi criada uma função para converter moeda. Essa função retorna o resultado da multiplicação do valor em dolar e da cotação do dolar, que foi pedido no prompt, em reais. O valor do Dolár foi estabelicido ao chamar a função na const meuDinheiro. 

2) Essa é uma função que calcula investimentos, nela tem todos os tipos de investimento e tem a multiplicação do valor pelos tipos de investimento. A const novoMontante está chamando a função e estabelecendo o tipo de investimento - Ações e o valor, 150, que vai ser estabelecido. Como o tipo de investimento está listado no switch  vai seer multiplicado o valor 150 por 1.1. Já a const segundoMontante vai ser direcionada para o default, pois Tesouro direto não está listado na case e será emitido um alerta informando que o tipo de investimento informado é incorreto.

3) Nesse o if pega os números do array numeros, se o número for par ele é adicionado no array1, se for ímpar é adicionado no array2. No primeiro console.log é impresso no console o tamanho do array numeros, no segundo console.log é impresso o tamanho do array1, assim como também é impresso no terceiro console.log o tamanho do array2.

4) Nesse se o numero do array numeros for menor que numero1, esse número será colocado dentro da variável numero1. Caso o numero seja maior será colocado dentro da variável numero2. Por fim, o primeiro console.log imprime a variável numero1 e o segundo a variável numero2.

----------------------------------------------------------------------------------------------------------------------

EXERCÍCIO DE LÓGICA DE PROGRAMAÇÃO: 


// 1) Programa para percorrer/iterar uma lista

1- 
let lista = ["doritos", "ruffles", "açaí", "chocolate"]
let i = 0

while(i < lista.length) {
    console.log(`${lista[i]}`)
    i++
}

2-
let lista = ["doritos", "ruffles", "açaí", "chocolate"]

for(let i = 0; i < lista.length; i++) {
    console.log(lista[i])
}

3-
let lista = ["doritos", "ruffles", "açaí", "chocolate"]

for(let comida of lista) {
    console.log(comida)
}

// 2) leitura dos valores das expressões lógicas:

a) false
b) false
c) true
d) true 
e) true

3) Imprime os números pares de acordo com o número colocado pelo usuário

// O código não funciona, pois não foi adicionado nenhum valor a variável e faltava o incremento.

const quantidadeDeNumerosPares = Number(prompt("Digite um valor: "))
let i = 0
while(i < quantidadeDeNumerosPares) {
    quantidadeDeNumerosPares 

   console.log(i*2)
   i++
}

4) Imprime se é triângulo Equilátero, Isósceles ou Escaleno

let ladosDoTriangulo =  (a, b, c) => {
    if(a === b && b === c){
        console.log("É um triângulo Equilátero")
    } else if(a === b && b !== c){
        console.log("É um triângulo Isósceles")
    } else  {
        console.log("É um triângulo Escaleno")
    }
}

ladosDoTriangulo(10, 10, 5)

5) programa que indica número maior, se são divisíveis e a diferença entre eles:

let numero = [15, 30]
let numeroMaior = 0 

console.log(`Entrada:`)
console.log(lista)


for (let i = 0; i < numero.length; i++){
    if (numero[i] > numeroMaior){
         numeroMaior = numero[i]
    } 
}
console.log(`Saída:`)
console.log(`o maior é: ${numeroMaior}`)

if (numero[0] % numero[1] === 0){ 
    console.log('15 é divisível por 30')
} else {
    console.log('15 não é divisível por 30')
} if (numero[1] % numero[1] === 0){ 
    console.log('30 é divisível por 15')
} else {
    console.log('30 não é divisível por 15')
}

if (numero[1] - numero[0]){
    console.log(`A diferença entre eles é ${lista[1] - lista[0]}`)
} else{
}


----------------------------------------------------------------------------------------------------------------------
EXERCÍCIOS DE FUNÇÕES

1) Função que recebe array de numeros e imprime o segundo maior e o segundo menor número.

const arrayNumeros = [1, 25, 15, 35, 22, 16, 17, 18, 23, 50]

let segundoMaior =[]
let segundoMenor = []


function recebeArray(arrayNumeros){
    for(let i = 0; i < arrayNumeros.length; i++){
        if (arrayNumeros[i] > maior){
            segundoMaior.push(arrayNumeros[i])
            
        }
        if ( arrayNumeros[i] < menor){
            segundoMenor.push(arrayNumeros[i])
           
        }
    }
    console.log(arrayNumeros)
    console.log(segundoMaior)
    console.log(segundoMenor)

}

recebeArray(arrayNumeros)


*/ 

let mensagemAlerta = (alerta) => {
    alert("Hello Labenu")
}

const mostraAlerta = mensagemAlerta(alert)

console.log(mostraAlerta)











