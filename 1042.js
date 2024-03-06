var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

const numerosSeparados = lines[0].split(' ').map(numero => parseInt(numero));

lines = lines[0].split(' ').map(numero => parseInt(numero));

numerosSeparados.sort((a, b) => a - b);

for(i=0;i<3;i++){
    console.log(numerosSeparados[i])
}

console.log()

for(i=0;i<3;i++){
    console.log(lines[i])
}


