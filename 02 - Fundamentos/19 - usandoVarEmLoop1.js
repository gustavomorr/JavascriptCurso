for(var i = 0; i < 10; i++){
    console.log(i)
}
//o valor será mostrado fora do bloco da function FOR pq foi usado variável VAR, que não tem escopo, é global
// o valor impresso, será o valor que fez sair da condição, nesse caso i = 10
console.log('i = ',i)