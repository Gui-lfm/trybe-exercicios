//parte 1
function verificaPalindromo(string) {
    let reverse = string.split('').reverse().join('')

    if (reverse === string) {
        return true
    } else {
        return false
    }
}

console.log(verificaPalindromo('banana'))
console.log(verificaPalindromo('arara'))

//parte 2

let arrayTeste = [2, 3, 6, 7, 10, 1];

function maiorIndice(array) {
    let maior = 0;

    for (let index = 0; index < array.length; index += 1) {
        if (array[index] > maior) {
            maior = index
        }
    }

    return maior
}

console.log(maiorIndice(arrayTeste))

//parte 3
let teste2 = [2, 4, 6, 7, 10, 0, -3]

function menorIndice(array) {
    let menor = 0;

    for (let index = 0; index < array.length; index += 1) {

        if (menor == 0 || array[index] < menor) {
            menor = index
        }
    }

    return menor
}

console.log(menorIndice(teste2));

//parte 4
let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

function maiorNome(array) {
    let maiorNome = ''

    for (let index = 0; index < array.length; index += 1) {
        let nLetras = 0;
        let nome = array[index]

        for (let j = 0; j < nome.length; j += 1) {
            nLetras += 1;
        }

        if (nLetras > maiorNome.length) {
            maiorNome = nome;
        }
    }
    return maiorNome;
}

console.log(maiorNome(nomes));

//parte 5
let numeros = [2, 3, 2, 5, 8, 2, 3];


function numeroRepetido(array) {
    let maisRepetido = 0;

    for (let index = 0; index < array.length; index += 1) {
        let vezesRepetido = 0;
        let numRepetido = array[index];

        for (let i = 0; i < array.length; i += 1) {
            if (numRepetido == array[i]) {
                vezesRepetido += 1;
            }

            if (vezesRepetido > maisRepetido) {
                maisRepetido = array[index]
            }
        }

    }

    return `numero mais repetido: ${maisRepetido}`
}

console.log(numeroRepetido(numeros))

//parte 6
let n = 5;

function somaNumeros(num) {
    let soma = 0;
    for (let index = 0; index <= num; index += 1) {

        soma += index
    }
    return soma
}

console.log(somaNumeros(n));

//parte 7

let frase1 = 'trybe';
let frase2 = 'be';

function verificaString(word, ending) {

    let verifica = word.endsWith(ending)

    return verifica
}

console.log(verificaString(frase1, frase2));