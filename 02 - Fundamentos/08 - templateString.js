const nome = 'Gustavo'
const concatenacao = 'Olá ' + nome + '!'

const template = `
    Olá 
    ${nome}!`

console.log(concatenacao, template)

// expressoes
console.log(`1 + 1 = ${1 + 1}`)

// função para passar um texto para MAIÚSCULO
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)