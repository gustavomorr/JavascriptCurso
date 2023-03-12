/* Primeiro vamos montar um
objeto para trabalhar com
destructuring e realizar atribuições de formas mais
RÁPIDAS*/
/* OBS: EM OBJETOS PARA USARMOS O DESTRUCTURING 
USAREMOS {}*/
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

/* Usando destructuring para extrair
variáveis de dentro de um objeto
e trabalhar com elas */

const { nome, idade} = pessoa
console.log(nome, idade)


const { nome: n, idade: i} = pessoa
console.log(n, i)

const{endereco:{logradouro,numero}} = pessoa
console.log(logradouro, numero)

console.log(pessoa)