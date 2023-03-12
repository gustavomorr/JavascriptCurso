// Função em JS é First-Class Object (Citizens)
// Higher-order function

//Criar de forma literal

// o return de uma função js é opcional, caso não retorne nada , retorne undefined
function fun(){

}

// Você pode armazenar uma função em uma variável
const fun2 = function(){

}

// Voce pode armazenar uma função em um array
//Pode declarar a função direto no array, como chamar a function declarada, e/ou uma constante com uma function associada.
const array = [function(a,b){return a + b}, fun, fun2]
console.log(array[0](2,3))

// Você também pode armazenar uma função em um atributo de um objeto
const obj = {}
obj.falar = function(){return 'Eai blz?'}

console.log(obj.falar())

//Voce também pode passar uma função como parâmetro para outra função


