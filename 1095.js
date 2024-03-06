var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

i = 1

for(j=60;j>=0;j=j-5){
    console.log("I="+i+" J="+j)
    i = i+3
}