function getInteiroAleatorioEntre(min,max){
    const valor = Math.random() * (max - min)
    return Math.floor(valor)
}

let opcao = 0

while(opcao != 3){
    opcao = getInteiroAleatorioEntre(-1,5)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima')