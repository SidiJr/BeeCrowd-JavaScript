var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

lines.forEach((element, index) => {
    if(element <= 0){
        element = 1;
    }
    console.log('X['+index+'] = '+Number(element));  
});