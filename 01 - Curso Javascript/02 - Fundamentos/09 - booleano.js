let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
//negação duas vezes !! , torna o valor padrão !!ativo = ativo
console.log(!!isAtivo)
//Resolvem pra VERDADEIRO
console.log('os verdadeiros...')
console.log(!!3)
console.log(!! -1)
console.log(!!'')
// Resolvem para FALSO
console.log('os falsos....')

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))