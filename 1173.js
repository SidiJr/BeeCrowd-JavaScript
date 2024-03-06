const { constrainedMemory } = require('process');

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var vetor = new Array(10);

for(i=0;i<10;i++){
    vetor[i] = lines[0];
    console.log('N['+i+'] = '+vetor[i]);
    lines[0] = lines[0] * 2;
}