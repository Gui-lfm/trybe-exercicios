// parte 1

const numRomanos = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// parte 2
let vector = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
];

const arrayOfNumbers = (array) => {
  const arrayOfEvens = [];
  for (let i = 0; i < array.length; i += 1) {
    const currentArray = array[i];
    for (let j = 0; j < currentArray.length; j += 1) {
      const element = currentArray[j];
      if (element % 2 == 0) {
        arrayOfEvens.push(element);
      }
    }
  }
  return arrayOfEvens;
};

// parte 3
const basket = [
  'Melancia',
  'Abacate',
  'Melancia',
  'Melancia',
  'Uva',
  'Laranja',
  'Jaca',
  'Pera',
  'Melancia',
  'Uva',
  'Laranja',
  'Melancia',
  'Banana',
  'Uva',
  'Pera',
  'Abacate',
  'Laranja',
  'Abacate',
  'Banana',
  'Melancia',
  'Laranja',
  'Laranja',
  'Jaca',
  'Uva',
  'Banana',
  'Uva',
  'Laranja',
  'Pera',
  'Melancia',
  'Uva',
  'Jaca',
  'Banana',
  'Pera',
  'Abacate',
  'Melancia',
  'Melancia',
  'Laranja',
  'Pera',
  'Banana',
  'Jaca',
  'Laranja',
  'Melancia',
  'Abacate',
  'Abacate',
  'Pera',
  'Melancia',
  'Banana',
  'Banana',
  'Abacate',
  'Uva',
  'Laranja',
  'Banana',
  'Abacate',
  'Uva',
  'Uva',
  'Abacate',
  'Abacate',
  'Melancia',
  'Uva',
  'Jaca',
  'Uva',
  'Banana',
  'Abacate',
  'Banana',
  'Uva',
  'Banana',
  'Laranja',
  'Laranja',
  'Jaca',
  'Jaca',
  'Abacate',
  'Jaca',
  'Laranja',
  'Melancia',
  'Pera',
  'Jaca',
  'Melancia',
  'Uva',
  'Abacate',
  'Jaca',
  'Jaca',
  'Abacate',
  'Uva',
  'Laranja',
  'Pera',
  'Melancia',
  'Jaca',
  'Pera',
  'Laranja',
  'Jaca',
  'Pera',
  'Melancia',
  'Jaca',
  'Banana',
  'Laranja',
  'Jaca',
  'Banana',
  'Pera',
  'Abacate',
  'Uva',
];

const fruitList = (array) => {
  const list = {};
  array.forEach((fruit) => {
    let currentFruit = fruit;
    let count = 0;
    for (let index = 0; index < array.length; index += 1) {
      if (currentFruit === array[index]) {
        count += 1;
      }
      list[currentFruit] = count;
    }
  });
  return list;
};

function printList(obj) {
  console.log('Sua cesta possui:');
  for (const key in obj) {
    console.log(`${obj[key]} ${key}s`);
  }
}
printList(fruitList(basket));

// parte 4
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

const nome = moradores.blocoDois[1].nome;
const sobrenome = moradores.blocoDois[1].sobrenome;
const andar = moradores.blocoDois[1].andar;
const apartamento = moradores.blocoDois[1].apartamento;

console.log(
  `O morador do bloco 2 de nome ${nome} ${sobrenome} mora no ${andar}° andar, apartamento ${apartamento}`
);
const blocos = Object.values(moradores);

for (let i = 0; i < blocos.length; i += 1) {
  const blocoAtual = blocos[i];
  for (let j = 0; j < blocoAtual.length; j += 1) {
    const morador = blocoAtual[j];
    console.log(`${morador.nome} ${morador.sobrenome}`);
  }
}
