var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

Numero = Number(lines[0]);
HorasTrabalhadas = Number(lines[1]);
ValorHora = Number(lines[2]);

Salario = HorasTrabalhadas * ValorHora
console.log("NUMBER = "+ Numero+"\nSALARY = U$ "+Salario.toFixed(2))