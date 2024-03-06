var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

soma = 0

for(i=1;i<=Number(lines[0]);i++){
    valor = Number(lines[i])
    for(j=0;j<valor;j++){
        if(valor % j === 0){
            soma = soma + j
        }
    }
    if(soma === valor){
        console.log(valor+" eh perfeito")
    }else{
        console.log(valor+" nao eh perfeito")
    }
    soma = 0
}