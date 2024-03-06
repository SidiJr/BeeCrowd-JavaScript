var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var j = 1
var i = Number(lines[0])

while(i !== 2002){
    console.log("Senha Invalida")
    i = Number(lines[j])
    j++
}

if(i === 2002){
    console.log("Acesso Permitido")
}