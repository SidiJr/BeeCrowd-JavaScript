var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var vetor = new Array(100);
var a = Number(lines[0]);
var decimal = 0;

for(i=0;i<100;i++){
    vetor[i] = a.toFixed(4);
    a = a/2;
    decimal = vetor[i] % 1
    if(decimal === 0.78125){
        vetor[i] = Math.floor(vetor[i])
        decimal = vetor[i] + 0.7812
        console.log("N["+i+"] = "+decimal)
    }else{
        console.log("N["+i+"] = "+vetor[i])
    }
    decimal = 0
}

