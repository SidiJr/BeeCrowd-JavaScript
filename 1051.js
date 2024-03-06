var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

salario = Number(lines[0])
var imposto

if(salario > 4500){
    salario2 = salario - 4500
    imposto = (1000 * 0.08) + (1500 * 0.18) + (salario2 * 0.28)
    console.log("R$ "+imposto.toFixed(2))
}

if(salario > 3000 && salario <= 4500){
    salario2 = salario - 3000
    imposto = (1000 * 0.08) + (salario2 * 0.18)
    console.log("R$ "+imposto.toFixed(2))
}

if(salario > 2000 && salario <= 3000){
    salario2 = salario - 2000
    imposto = (salario2 * 0.08)
    console.log("R$ "+imposto.toFixed(2))
}

if(salario <= 2000){
    console.log("Isento")
}