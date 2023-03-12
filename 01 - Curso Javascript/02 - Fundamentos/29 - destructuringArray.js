/* Neste exemplo como estamos usando o destructuring
em arrays, ele começará com [], então passaremos a 
variável a no destructuring, que receberá o valor do array*/
const [a] = [10]
console.log(a)

/* Neste exemplos, criamos um destructuring
com as variáveis n1,n3,n5, n6, e elas receberão os valores
de acordo com os índices que se encontram em relação
ao outro array que estamos extraindo */
const [n1, ,n3, , n5, n6 = 0] = [10, 7 , 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[,8, 8], [9, 6, 8]]
console.log(nota)