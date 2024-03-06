var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var vetor = new Array(1000);
var contador = Number(lines[0]);

for(i=0;i<1000;i++){
    vetor[i] = Number(lines[0]) - contador;
    contador--;
    if(contador === 0){
        contador = Number(lines[0]);
    }
    console.log('N['+i+'] = '+vetor[i]);
}