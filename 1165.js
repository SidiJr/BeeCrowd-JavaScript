var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

divisores = 0
contador = Number(lines[0])

for(i=1;i<=contador;i++){
    valor = Number(lines[i])
    for(j=1;j<=valor;j++){
        if(valor % j === 0){
            divisores = divisores + 1
        }
    }
    if(divisores === 2){
        console.log(valor+" eh primo")
    }else{
        console.log(valor+" nao eh primo")
    }
    divisores = 0
}