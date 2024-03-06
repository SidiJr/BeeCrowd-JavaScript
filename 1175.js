var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var vetor = new Array(20);
var contador = 19;

for(i=0;i<20;i++){
    vetor[contador] = lines[i];
    contador--;
}

for(i=0;i<20;i++){
    console.log('N['+i+'] = '+vetor[i]);
}