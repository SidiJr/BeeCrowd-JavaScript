var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

A = Number(lines[0])
B = Number(lines[1])
C = Number(lines[2])

MaiorAB = (A+B+Math.abs(A-B))/2
if(MaiorAB > C){
    Maior = MaiorAB
}else{
    Maior = C
}

console.log(Maior+" eh o maior")