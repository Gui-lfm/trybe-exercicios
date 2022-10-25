// parte 1
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;

const result = numbers.find(findDivisibleBy3And5);

console.log(result);

// parte 2
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (string) => string.length === 5;

const result2 = names.find(findNameWithFiveLetters);
console.log(result2);

// parte 3
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(music) {
  return music.id === '31031685'
}

console.log(musicas.find(findMusic));
