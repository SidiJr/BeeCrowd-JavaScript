var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var fib = new Array(60);

fib[0] = 0;
fib[1] = 1;
var total = 1;

for(i=2;i<=60;i++){
    fib[i] = total;
    total = total + fib[i-1];
}

for(i=1;i<=lines[0];i++){   
    console.log('Fib('+Number(lines[i])+') = '+fib[Number(lines[i])]);
}






