//parte 1

let nlado = 4
let asterisco = '*';
let quadrado = ''

for (let index = 0; index < nlado; index += 1) {
    quadrado += asterisco
}
let contador = 0

while (contador < nlado) {
    console.log(quadrado)
    contador += 1
}

//parte 2

let n = 4
let asterisco2 = '*';
let triangulo = ''

for (let index = 0; index < n; index += 1) {

    triangulo += asterisco2
    console.log(triangulo);
}

//parte 3



//parte 4

//parte 5

//parte 6

const num = 13;
let count = 0;

for (let index = 0; index <= num; index += 1) {

    if(num % index == 0){
        count +=1
    }
    
}

if(count == 2){
    console.log(`${num} é primo`);
}else{
    console.log(`${num} não é primo`);
    console.log(count);
}