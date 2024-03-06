var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var x = Number(lines[0]), i=0

while(x !== 0){
    i++
    if(x % 2 === 0){
        console.log(x + (x+2) + (x+4) + (x+6) + (x+8))
    }
    if(x % 2 !== 0){
        console.log((x+1) + (x+3) + (x+5) + (x+7) + (x+9))
    }
    x = Number(lines[i])
}