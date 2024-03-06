var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

pi = 3.14159;
raio = Number(lines[0]);
A = pi * (raio * raio);
A=A.toFixed(4);
console.log("A="+A);