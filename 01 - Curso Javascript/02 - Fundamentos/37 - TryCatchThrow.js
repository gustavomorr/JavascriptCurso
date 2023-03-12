function tratarErroELancar(erro){
    throw new Error('...')
   
         }

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(erro){
        tratarErroELancar(erro)
    } finally {
        console.log('final')
    }
}

const obj = {nome: 'Gustavo'}
imprimirNomeGritado(obj)
