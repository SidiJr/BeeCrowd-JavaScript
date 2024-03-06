var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var contador = parseInt(lines[0]);
var vetor = lines[1].split(' ').map(x => parseInt(x));
var menor = vetor[0];
var posicao = 0;

for(i=1;i<contador;i++){
    if(vetor[i] <= menor){
        menor = vetor[i];
        posicao = i;
    }
}

console.log('Menor valor: '+menor+'\nPosicao: '+posicao);