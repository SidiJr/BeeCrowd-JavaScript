var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var par = new Array();
var impar = new Array();

for(i=0;i<15;i++){
    if(Number(lines[i]) % 2 === 0){
        par.push(Number(lines[i]));
    }else{
        impar.push(Number(lines[i]));
    }

    if(Number(impar.length === 5)){
        for(j=0;j<5;j++){
            console.log('impar['+j+'] = '+impar[j]);
        }
        impar = [];
    }
    if(Number(par.length === 5)){
        for(j=0;j<5;j++){
            console.log('par['+j+'] = '+par[j]);
        }
        par = [];
    }
}

impar.forEach((element,index) => {
    console.log('impar['+index+'] = '+element);
});

par.forEach((element,index) => {
    console.log('par['+index+'] = '+element);
});







