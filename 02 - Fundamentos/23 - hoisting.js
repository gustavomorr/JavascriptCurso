console.log('a = ', a)
var a = 2
console.log('a = ', a)

/* Devido ao Hoisting, quando tentamos invocar o valor de uma variável do tipo VAR antes de ter definido,
acontece o Hoisting, que nada mais é do que '' puxar para cima, e assim apenas retornar que ela ainda não foi
definida, mas foi criada*/

console.log('b = ', b)
let b = 2
console.log('b =', b)

/* Se tentarmos realizar isso, usando uma variável do tipo LET, isso não acontecerá, e
retornará em ERRO */