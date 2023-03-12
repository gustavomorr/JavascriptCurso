console.log(Math.ceil(6.1)) // função para arredondar para cima.

const obj1 = {} // criamos um objeto

obj1.nome = 'Bola' /* Atribuimos a variável nome ao objeto, atráves da notação
ponto*/

console.log(obj1)


function Obj(nome){
    this.nome = nome /* Isso fará com que esse nome passado por parâmetro
    fique visível para quem instanciar um Objeto dessa função. */
}

const obj2 = new Obj('Cadeira')/* Instanciei um OBJETO da função obj, e agora
como usei o this.nome = nome, tenho acesso a variável nome da função:
*/
console.log(obj2.nome)

/* Também posso usar o this, para tornar funções públicas dentro de outras
funções, assim quando instanciarmos um objeto dessa função, também teremos
acesso à esta function */

/* Criei uma função que recebe como parâmetro nome*/
function Objeto(nome){
    this.exec = function(){ /*Tornei essa função, que está dentro da função
    objeto pública*/
        console.log('Exec...')
    }
}
// Instanciei um objeto da função Objeto.
const ObjInst = new Objeto
/*como usei o this.exec, essa função se tornou pública para os 
objetos que instanciei dessa function*/
ObjInst.exec()

