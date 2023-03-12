function calcularNota(nota){
    if(nota >= 7){
        console.log('Aprovado ' + nota)
    }
}


function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(-1)