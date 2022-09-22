const salarioBruto = 3000

let aliquotaINSS;

let aliquotaIR;
let parcela;

//INSS

if (salarioBruto <= 1556.94) {
    aliquotaINSS = salarioBruto * .08
    console.log('caso1')
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquotaINSS = salarioBruto * .09
    console.log('caso2')
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaINSS = salarioBruto * .11
    console.log('caso3');
} else {
    aliquotaINSS = 570.88
    console.log('caso4');
}

const salarioBase = salarioBruto - aliquotaINSS;
console.log(`valor do salario base: ${salarioBase}`)

//IR

if (salarioBase <= 1903.98) {
    aliquotaIR = 0
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    parcela = 142.80
    aliquotaIR = (salarioBase * .075) - parcela
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    parcela = 354.80
    aliquotaIR = (salarioBase * .15) - parcela
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    parcela = 636.13
    aliquotaIR = (salarioBase * .225) - parcela
} else {
    parcela = 869.36
    aliquotaIR = (salarioBase * .275) - parcela
}

const salarioLiquido = salarioBase - aliquotaIR
console.log(`salario líquido: ${salarioLiquido}`);