const hydrate = (string) => {
  const fraseSeparada = string.split(' ');
  let totalAgua = 0;

  for (let i = 0; i < fraseSeparada.length; i += 1) {
    const element = fraseSeparada[i];
    if (!isNaN(element)) {
      totalAgua += parseInt(element);
    }
  }

  if(totalAgua === 1){
    return `1 copo de água`
  }

  return `${totalAgua} copos de água`
};

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = hydrate;
