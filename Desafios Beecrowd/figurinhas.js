var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

//Lendo o número de caso de teste
var N = parseInt(lines[0])


//Função para calcular o Máximo Divisor Comum (MDC)
var gcd = function(a,b){
    while(b !== 0){
        let temp = b
        b = a % b
        a = temp
    }

    return a
}

//Função principal para processar os casos de teste
var figurinhas = function(){
    for(var i =1; i <= N; i++){
        let [f1,f2] = lines[i].split(' ').map(Number)
        let resultado = gcd(f1,f2)
        console.log(resultado)
    }
}

figurinhas()