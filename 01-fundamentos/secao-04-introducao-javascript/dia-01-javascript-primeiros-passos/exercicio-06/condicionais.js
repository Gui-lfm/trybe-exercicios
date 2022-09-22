// condicionais if-else

const num1 = 3;
const num2 = 8;
const num3 = 10;

const positivo = 2;
const negativo = -11;

    //maior de dois números

if (num1 > num2) {
    console.log(`numero um é maior: ${num1}`);
}else{
    console.log(`numero dois é maior: ${num2}`);
}

    //maior de três números

if(num1 > num2 && num1 > num3){
    console.log(`numero um é maior: ${num1}`)
}else if(num2 > num1 && num2 > num3){
    console.log(`numero dois é maior: ${num2}`)
}else{
    console.log(`numero três é maior: ${num3}`)
}

    //positivo e negativo

let valor = positivo;

if(valor > 0){
    console.log('positive')
}else if(valor < 0){
    console.log('negative')
}else{
    console.log('zero');
}

    //soma dos ângulos

const angulo1 = 30;
const angulo2 = 60;
const angulo3 = 100;

const somaAngulos = angulo1 + angulo2 + angulo3

if(angulo1 < 0 || angulo2 < 0 || angulo3 < 0 || somaAngulos < 180 || somaAngulos > 180){
    console.log(false); 
}else if(somaAngulos == 180){
    console.log(true);
}
