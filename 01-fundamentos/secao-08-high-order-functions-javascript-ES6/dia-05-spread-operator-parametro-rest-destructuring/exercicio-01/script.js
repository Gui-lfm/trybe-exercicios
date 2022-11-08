// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maçã', 'banana', 'pêra'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['mel', 'aveia', 'morango'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));
