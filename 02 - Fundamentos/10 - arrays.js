const valores = [7.7,6.5,6.4,5.6]

console.log(valores[0], valores[3])
//gera undefined
console.log(valores[4])
// gera o índice 4 e atribui 10 ao seu valor
valores[4] = 10
console.log(valores[4])
//acessa a quantidade de itens de um array
console.log(valores.length)


// Função para adicionar itens ao array
valores.push({id:3}, false, null, 'teste')
console.log(valores)

//Função para tirar o último elemento de um array
console.log(valores.pop())
// para deletar um item de um array por índice
delete valores[0]
console.log(valores)

// em JS um array é do tipo OBJETO
console.log(typeof valores)

