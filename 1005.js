var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

A = Number(lines[0]);
B = Number(lines[1]);

A = A*0.35
B = B*0.75

MEDIA = (A+B)/1.1
MEDIA =MEDIA.toFixed(5)

console.log("MEDIA = " + MEDIA)