let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

let menor = 0;
let maior = 0;
let impares = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 != 0) {
        impares += 1
    }

    if(menor === 0 || numbers[i] < menor){
        menor = numbers[i]
    }

    if (numbers[i] > maior) {
        maior = numbers[i]
    }
    sum += numbers[i]
}

console.log(`valor da soma dos elementos do array: ${sum}\n`);
console.log(`maior numero: ${maior}\n`) //valor esperado: 100

if(impares > 0){
    console.log(`quantidade de impares no array: ${impares}\n`) //resultado esperado: 6
}else{
    console.log('nenhum valor encontrado \n')
}

console.log(`menor numero: ${menor}`) //resultado esperado: 2

//média aritimética
const mediaAritimetica = sum / numbers.length
console.log(`média da soma ${mediaAritimetica}\n`);

if (mediaAritimetica > 20) {
    console.log('maior do que 20 \n')
} else {
    console.log('menor do que 20 \n')
}