/* EXERCÍCIO DE INTERPRETAÇÃO 

1)
a) Vai ser impresso no console o resultado da multiplicação que é 10 e 50.

b) Nesse caso não vai aparecer nada no console, porque tem que armazenar o resultado em uma variavel e só seria impresso se tivesse o console.log também.

2)
a) A saída expressa no console é Darvas e Caio.
b) Seria impresso Amanda e Caio.

3) Pega os números pares do array, multiplica por dois e coloca no arrayFinal. E o nome da array poderia ser multiplicarNumPares. 

--------------------------------------------------
EXERCÍCIOS DE ESCRITA DE CÓDIGO

4)

a) 
function sobreMim() {
    console.log('Eu sou Isabela, tenho 22 anos, moro em Contagem-MG e sou estudante.')
}

sobreMim()

b)
let dadosPessoais = (nome, idade, cidade, estudante) => {
 
    if(estudante === "sim") {
        estudante = "sou estudante"
    } else {
        estudante = "não sou estudante"
    }
        console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante}.`)

}

let nome = prompt("Qual o seu nome?")
let idade = Number(prompt("Qual a sua idade?"))
let cidade = prompt("Em qual cidade você mora?")
let estudante = prompt("Você é estudante? Digite sim ou não.") 

const resultadoDadosPessoais = dadosPessoais(nome, idade, cidade, estudante)
console.log(resultadoDadosPessoais)
---------------------------------------------------

5)

a)
function somaDoisNumeros(a, b){
    return a + b
}

const resultado = somaDoisNumeros(15, 85)
console.log(resultado)

b)
let checaMaiorOuIgual = (a, b) => {
    
    if(a >= b){
        return true
    } else {
        return false
    }
}

const resultado = checaMaiorOuIgual(20, 20)
console.log(resultado)

c)


*/

function mensagemImpressaDezX(mensagem){
    for(let i = 0; i < 10; i++)
       console.log(mensagem)
}

const resultado = mensagemImpressaDezX("Hello World")



