/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO: 

1) Foi criada uma função para converter moeda. Essa função retorna o resultado da multiplicação do valor em dolar e da cotação do dolar, que foi pedido no prompt, em reais. O valor do Dolár foi estabelicido ao chamar a função na const meuDinheiro. 

2) Essa é uma função que calcula investimentos, nela tem todos os tipos de investimento e tem a multiplicação do valor pelos tipos de investimento. A const novoMontante está chamando a função e estabelecendo o tipo de investimento - Ações e o valor, 150, que vai ser estabelecido. Como o tipo de investimento está listado no switch  vai seer multiplicado o valor 150 por 1.1. Já a const segundoMontante vai ser direcionada para o default, pois Tesouro direto não está listado na case e será emitido um alerta informando que o tipo de investimento informado é incorreto.

3) Nesse o if pega os números do array numeros, se o número for par ele é adicionado no array1, se for ímpar é adicionado no array2. No primeiro console.log é impresso no console o tamanho do array numeros, no segundo console.log é impresso o tamanho do array1, assim como também é impresso no terceiro console.log o tamanho do array2.

4) Nesse se o numero do array numeros for menor que numero1, esse número será colocado dentro da variável numero1. Caso o numero seja maior será colocado dentro da variável numero2. Por fim, o primeiro console.log imprime a variável numero1 e o segundo a variável numero2.

----------------------------------------------------------------------------------------------------------------------

EXERCÍCIO DE LÓGICA DE PROGRAMAÇÃO: 


EXERCÍCIO 1 - Programa para percorrer/iterar uma lista

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

EXERCÍCIO 2 - leitura dos valores das expressões lógicas:

a) false
b) false
c) true
d) true 
e) true

EXERCÍCIO 3 - Imprime os números pares de acordo com o número colocado pelo usuário

// O código não funciona, pois não foi adicionado nenhum valor a variável e faltava o incremento.

const quantidadeDeNumerosPares = Number(prompt("Digite um valor: "))
let i = 0
while(i < quantidadeDeNumerosPares) {
    quantidadeDeNumerosPares 

   console.log(i*2)
   i++
}

EXERCÍCIO 4 - Imprime se é triângulo Equilátero, Isósceles ou Escaleno

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

EXERCÍCIO 5 - programa que indica número maior, se são divisíveis e a diferença entre eles:

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

EXERCÍCIO 1 - Função que recebe array de numeros e imprime o segundo maior e o segundo menor número.

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

EXERCÍCIO 2 - Função não nomeada que faz um alert e invoca a função

let mensagemAlerta = (alerta) => {
    alert("Hello Labenu")
}

const mostraAlerta = mensagemAlerta(alert)

console.log(mostraAlerta)

----------------------------------------------------------------------------------------------------------------------

EXERCÍCIOS DE OBJETOS

EXERCÍCIO 1 - o que é array e objetos

array é uma lista, guarda várias informações ao mesmo tempo. Já objetos armazena dados mais complexos de uma forma mais organizada.

EXERCÍCIO 2

let criaRetangulo = (lado1,lado2) => {
    let retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: 2 * (lado1 + lado2),
        area: lado1 * lado2,

    }
}

const resultado = criaRetangulo(5,8)
console.log(resultado)


EXERCÍCIO 3

let filmeFavorito = {
    titulo: 'velozes e Furiosos 8',
    ano: 2017,
    diretor: 'F. Gary Gray',
    atores: ['Vin Diesel', 'Dwayne Johnson']
}

console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores}`)

EXERCÍCIO 4

let pessoa = {
    nome: 'Linda',
    idade: 22,
    email: 'soulindademais@outlook.com',
    endereco: 'rua da mais linda, bairro Jardim das Maravilhas'
}

let anonimizarPessoa = (novoArray) => {
    let pessoaAnonima = {
        ...novoArray,
    nome: 'Anônimo'
    }
console.log(pessoaAnonima)
}

console.log(pessoa)
anonimizarPessoa(pessoa)

----------------------------------------------------------------------------------------------------------------------

EXERCÍCIOS DE FUNÇÕES DE ARRAY

EXERCÍCIO 1

a)

const informacoesPessoas = [
    { nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

let retornaArrayAdultos = informacoesPessoas.filter((dados) => {
    if(dados.idade >= 20){
        return true
    }
    return false
})

console.log(retornaArrayAdultos)

b)

const informacoesPessoas = [
    { nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

let retornaArrayMenores = informacoesPessoas.filter((dados) => {
    if(dados.idade < 20){
        return true
    }
    return false
})

console.log(retornaArrayMenores)


EXERCÍCIO 2

a)

const array = [1, 2, 3, 4, 5, 6]

let multiplicaPorDois = array.map((dados) => {
    return dados * 2
})

b) 

const array = [1, 2, 3, 4, 5, 6]

let multiplicaPorTres = array.map((dados) => {
    return dados * 3
})

c)

const array = [1, 2, 3, 4, 5, 6]

let numerosImpares = array.map((dados) => {
    if(dados % 2 === 0) {
        return 
    } else {
        return `${dados} é impar`
    }
    
})

console.log(numerosImpares)


EXERCÍCIO 3

a)

const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

let pemissaoParaEntrar = pessoas.filter((dados) => {
    if(dados.idade > 14 && dados.idade < 60 && dados.altura >= 1.5){
        return true
    } else {
        return false
    }
})

b)

const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

let SempemissaoEntrar = pessoas.filter((dados) => {
    if(dados.idade < 14 && dados.idade > 60 && dados.altura < 1.5){
        return true
    } else {
        return false
    }
})

EXERCÍCIO 4

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

let criaEmail = consultas.map((dados) => {
    if(dados.cancelada === false){
        switch(dados.genero){
            case "masculino":
            return (`Olá, Sr.${dados.nome}. Estamos enviando esta mensagem para lembrá-lo  da sua consulta no dia ${dados.dataDaConsulta}. Por favor, acuse
                o recebimento deste e-mail.`)
            
            case "feminino":
            return (`Olá, Sra.${dados.nome}. Estamos enviando esta mensagem para lembrá-la  da sua consulta no dia ${dados.dataDaConsulta}. Por favor, acuse
                o recebimento deste e-mail.`)
        }
    } else {
        switch(dados.genero){
        case "masculino":
            return (`Olá, Sr. ${dados.nome}. Infelizmente, sua consulta marcada
            para o dia ${dados.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)  
        case "feminino":
            return (`Olá, Sra. ${dados.nome}. Infelizmente, sua consulta marcada
                para o dia ${dados.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)
    }
}
})

EXERCÍCIO 5

const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

contas.forEach((dados,index) => {
    switch (index){
        case 0:
            dados.saldoTotal = 400
            break;
        case 1:
            dados.saldoTotal = 6260
            break;
        case 2:
            dados.saldoTotal = -3340
            break;
        case 3:
            dados.saldoTotal = -1900
            break;
        case 4:
            dados.saldoTotal = 1300
            break;
        case 5:
            dados.saldoTotal = 1200
            break;
    }

})
*/ 




