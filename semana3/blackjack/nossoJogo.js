/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


console.log("Seja bem-vindo ao jogo")

let jogar = confirm("Quer iniciar uma nova rodada?")
 

if (jogar) {
   let carta1 = comprarCarta()
   let cartaUsuario = carta1.texto
   let valorCartaUsuario = carta1.valor

   let carta2 = comprarCarta()
   let carta2Usuario = carta2.texto
   let valorCarta2Usuario = carta2.valor

   let cartaPc = comprarCarta()
   let carta1Pc = cartaPc.texto
   let valorCartaPc = cartaPc.valor

   let carta2Pc = comprarCarta()
   let cartaPc2 = carta2Pc.texto
   let valorCartaPc = carta2Pc.valor

   let somaCartaUsuario = valorCartaUsuario + valorCarta2Usuario
   let somaCartaPc = cartaPc.valor + carta2Pc.valor
 
console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto} - pontuação:${somaCartaUsuario}`)
console.log(`Computador - cartas: ${cartaPc.texto} ${carta2Pc.texto} - pontuação: ${somaCartaPc}`)

if (somaCartaUsuario === somaCartaPc) {
   console.log("Empate!")

} else if (somaCartaUsuario > somaCartaPc) {
   console.log("O usuário ganhou!")

} else if (somaCartaUsuario < somaCartaPc){ 
   console.log("O computador ganhou!")
   
} else {
   console.log("O jogo acabou!")
}

// const carta1 = comprarCarta()
// const cartaUsuario = carta1.texto
// const valorCartaUsuario = carta1.valor

// const carta2 = comprarCarta()
// const cartaComputador = carta2.texto
// const valorCartaComputador = carta2.valor

// const somaCartas = (valorCartaUsuario + valorCartaComputador)
// console.log(`usuário - cartas: ${valorCartaUsuario} ${valorCartaComputador} - pontuação ${somaCartas} `)
