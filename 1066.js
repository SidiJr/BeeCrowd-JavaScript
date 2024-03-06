var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var par = 0, impar = 0, positivo = 0, negativo = 0

for(i=0;i<5;i++){
    if(lines[i] % 2 === 0){
        par = par + 1
    }else{
        impar = impar + 1
    }
}

for(i=0;i<5;i++){
    if(lines[i] > 0){
        positivo = positivo + 1
    }else if(lines[i] < 0){
        negativo = negativo + 1
    }
}

console.log(par+" valor(es) par(es)")
console.log(impar+" valor(es) impar(es)")
console.log(positivo+" valor(es) positivo(s)")
console.log(negativo+" valor(es) negativo(s)")   