// parte 1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const greetings = ([message, log]) => {
  return log(message);
};

greetings(saudacoes);

//parte 2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

const array = [comida, animal, bebida];

[animal, bebida, comida] = array;

console.log(comida, animal, bebida); // arroz gato água

// parte 3
let numerosPares = [1, 3, 5, 6, 8, 10, 12];


console.log(numerosPares); // [6, 8, 10, 12];