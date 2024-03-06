var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var j = 0, alcool = 0, gasolina = 0, diesel = 0, i = Number(lines[0])

while(i !== 4){
    valor = Number(lines[j])
    j++
    switch(valor){
        case 1:
            alcool = alcool + 1
        break;
        case 2:
            gasolina = gasolina + 1
        break;
        case 3:
            diesel = diesel + 1
        break;
        default:
        break;
    }
    i = Number(lines[j])
}

console.log("MUITO OBRIGADO\nAlcool: "+alcool+"\nGasolina: "+gasolina+"\nDiesel: "+diesel)