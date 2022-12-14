// parte 1
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((element) => element === name);
};

console.log(hasName(names, 'Ana'));

// parte 2
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];


const verifyAges = (arr, minimumAge) => {
  return arr.every((person)=>person.age >= minimumAge);
};

console.log(verifyAges(people, 18));
