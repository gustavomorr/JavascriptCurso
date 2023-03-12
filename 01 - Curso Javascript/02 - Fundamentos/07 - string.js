const escola = 'Cod3r'
//função para pegar a 4° letra da constante/variável
console.log(escola.charCodeAt(1))
//função para pegar o valor na tabela ASC do índice passado.
console.log(escola.charAt(4))
//função para pegar o índice passado
console.log(escola.indexOf('3'))
//função para imprimir string a partir do índice passado
console.log(escola.substring(1))
// range, mas ele não pega o último índice.
console.log(escola.substring(0,3))
//função para concatenar
console.log('Escola '.concat(escola).concat("!"))
// função para trocar o índice passado pelo valor passado no parâmetro.
console.log(escola.replace(3,'g'))
// função para gerar um array a partir de um delimitador definido
console.log('Gustavo,José,Mór'.split(','))
