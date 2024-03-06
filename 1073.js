var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

valor = Number(lines[0])

for(i=1;i<=valor;i++){
    if(i % 2 === 0){
        console.log(i+"^2 = "+i*i)
    }
}