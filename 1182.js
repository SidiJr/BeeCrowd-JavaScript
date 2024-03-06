var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var coluna = Number(lines[0])
var operacao = lines[1]
var soma = 0, media = 0

var matriz = []

for (i = 0; i < 12; i++) {
    matriz[i] = [];
}

var contador = 2

for(i = 0; i < 12; i++){ 
    for(j = 0; j < 12; j++){
        matriz[i][j] = parseFloat(lines[contador])
        contador++
    }   
}

if(operacao === "S"){
    for(i = 0; i < 12; i++){
        soma+= matriz[i][coluna]
    }
    console.log(soma.toFixed(1))
}else if(operacao === "M"){
    for(i = 0; i < 12; i++){
        soma+= matriz[i][coluna]
    }
    media = soma / 12
    console.log(media.toFixed(1))
}