var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

T = Number(lines[0])
anos = 0

const vetorSeparado = lines.map(elemento => elemento.split(" "));

for(i = 1; i <= T; i++){
    PA = Number(vetorSeparado[i][0])
    PB = Number(vetorSeparado[i][1])
    G1 = Number(vetorSeparado[i][2])
    G2 = Number(vetorSeparado[i][3])

    while(PA <= PB){
        
        PA = Math.floor(PA * (1 + G1 / 100));
        PB = Math.floor(PB * (1 + G2 / 100));
        anos++;

        if(anos > 100){
            console.log("Mais de 1 seculo.")
            break;
        }
    }
    if(anos <= 100){
        console.log(anos+" anos.")
    }
    anos = 0
}