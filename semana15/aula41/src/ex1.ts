//Exercício 1.A
const minhaString: string = "Açaí" //ao colocar um número recebemos um erro, pois em uma variável string só é permitido colocar textos 

//Exercício 1.B
const meuNumero: number | string = 5 //para fazer com que a variavel acima possa também receber uma string, usamos a sintaxe de union type, dessa forma

//Exercício 1.C
const objPessoa: {nome: string, idade: number, corPreferida: string } = {
    nome: "Isabela",
    idade: 22,
    corPreferida: "azul",
}

//Exercício 1.D
// Para garantir que um objeto só tenha as propriedades específicas fazemos a tipagem dele utilizando a palavra reservada type
// type pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: string
// }

// const naruto: person = {
//     nome: "Naruto",
//     idade: 17,
//     corFavorita: "Laranja"
// }

// const luffy: person = {
//     nome: "Luffy",
//     idade: 19,
//     corFavorita: "Vermelho"
// }

// const zoro: person = {
//     nome: "Zoro",
//     idade: 19,
//     corFavorita: "Verde"
// }

//Exercício 1.E
// para escolher as cores do Arco-íris para ser a cor favorita do objeto
enum ArcoIris {
    AZUL = "Azul",
    LARANJA = "Laranja",
    VERMELHO = "Vermelho",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: ArcoIris
}

const luffy: pessoa = {
    nome: "luffy",
    idade: 3,
    corFavorita: ArcoIris.VERMELHO
}

const naruto: pessoa = {
    nome: "Naruto",
    idade: 17,
    corFavorita: ArcoIris.AMARELO
}

const zoro: pessoa = {
    nome: "luffy",
    idade: 3,
    corFavorita: ArcoIris.VERDE
}

