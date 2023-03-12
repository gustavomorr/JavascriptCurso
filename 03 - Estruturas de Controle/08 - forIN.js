const notas = [5,7,8,5,6,4]

for (i in notas){
    console.log("indice: "+ i + " nota: " + notas[i])
}

// Usando FOR IN para percorrer um objeto

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 26,
    peso: 64
}

for (atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}