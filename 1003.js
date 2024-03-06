var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

A = Number(lines[0]);
B = Number(lines[1]);

SOMA = A + B;

console.log("SOMA = "+SOMA);