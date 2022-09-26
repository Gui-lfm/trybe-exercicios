//parte 1

let num = 10
let fat = 1

while (num >= 1) {
    fat *= num;
    num -= 1;
}

console.log(fat);

//parte 2

let string = 'trybe'


let stringReversa = ''

for (let index = 1; index <= string.length; index += 1) {

    stringReversa += string[string.length - index]
}

console.log(stringReversa)

//parte 3

let array = ['java', 'javascript', 'python', 'html', 'css']
let maiorPalavra = ''
let menorPalavra = ''

for (let index = 0; index < array.length; index+=1) {
    let nLetras = 0;
    let palavra = array[index]
    
    for (let j = 0; j < palavra.length; j+=1) {
        nLetras +=1;
    }
    
    if(nLetras > maiorPalavra.length){
        maiorPalavra = palavra;
    }

    if(menorPalavra.length == 0 || nLetras < menorPalavra.length){
        menorPalavra = palavra
    }
}

console.log(`maior palavra: ${maiorPalavra}`)
console.log(`menor palavra: ${menorPalavra}`);

// parte 4

let maior = 0;

for (let i = 2; i <= 50; i += 1) {
    let total = 0;
    
    for (let j = 1; j <= i; j += 1) {
        if (i % j == 0) {
            total += 1
        }
    }

    if(total == 2 && i > maior){
        maior = i;
    }
}

console.log(`maior número primo entre 2 e 50: ${maior}`) //resultado esperado: 47