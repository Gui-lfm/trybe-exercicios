// parte 1
const fatorial = num => {
  let resultado = 1;
  for (let i = num; i > 1; i -= 1) {
    resultado *= i;
  }

  return resultado;
};

console.log(`Esse é o fatorial ${fatorial(5)}!`);

//usando recursividade
const fat = number => (number === 1) ? 1 : (number * fat(number - 1));

console.log(fat(5));
