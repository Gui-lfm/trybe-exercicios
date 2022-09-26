//parte 1

function soma(a, b) {
    return a + b
}

function subtracao(a, b) {
    return a - b
}

function multiplicacao(a, b) {
    return a * b
}

function divisao(a, b) {
    return a / b
}

function modulo(a, b) {
    return a % b
}

//parte 2

function verificaMaior(a, b) {
    if (a > b) {
        return `${a} é maior que ${b}`;
    } else if (b > a) {
        return `${b} é maior que ${a}`;
    } else {
        return 'os números são iguais';
    }
}

//parte 3

function VerificaMaiorDeTres(a, b, c) {
    if (a > b && a > c) {
        return `maior numero: ${a}`
    } else if (b > a && b > c) {
        return `maior numero: ${b}`
    } else {
        return `maior numero: ${c}`
    }
}

//parte 4

function positivoNegativo(a) {
    if (a > 0) {
        return 'positivo'
    } else if (a < 0) {
        return 'negativo'
    } else {
        return 'zero'
    }
}

//parte 5

function verificaTriangulo(a, b, c) {
    let soma = a + b + c

    if (soma !== 180 || soma < 0) {
        return 'não é um triângulo'
    } else {
        return true
    }
}