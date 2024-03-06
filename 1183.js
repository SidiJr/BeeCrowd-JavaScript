var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var operacao = lines[0]
var soma = 0, media = 0
var contadormedia = 0

var matriz = []

for (i = 0; i < 12; i++) {
    matriz[i] = [];
}

var contador = 1

for(i = 0; i < 12; i++){ 
    for(j = 0; j < 12; j++){
        matriz[i][j] = parseFloat(lines[contador])
        contador++
    }   
}

if(operacao.trim() === "S"){
    for(i = 0; i < 12; i++){
        for(j = 0; j < 12; j++){
            if(j > i){
                soma+= matriz[i][j]
            }
        }
    }
    console.log(soma.toFixed(1))
}else if(operacao.trim() === "M"){
    for(i = 0; i < 12; i++){
        for(j = 0; j < 12; j++){
            if(j > i){
                soma+= matriz[i][j]
                contadormedia++
            }
        }
    }
    media = soma / contadormedia
    console.log(media.toFixed(1))
}