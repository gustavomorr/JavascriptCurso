// par nome/valor

const saudacao = 'Opa' /* Contexto léxico 1, ou seja o local onde
foi criado essa constante/variável*/

function exec(){
    const saudacao = 'Fala' /* Contexto léxico 2, ou seja nesse 
    contexto foi definido essa variável/constante dentro de uma função, caso
    não tenha valor aqui, ele vai buscar fora do escopo da função, até achar.
    */
   return saudacao
}

// Objetos são grupos aninhados de pares/valor
const cliente = {
    nome: 'Gustavo',
    idade: 25,
    peso: 100,
    endereco:{
        logradouro:'Rua show de bola',
        numero: 323
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)