const techList = (array, nome) => {
  array.sort();

  let lista = [];

  if (array.length === 0) {
    return 'Vazio!';
  }

  for (const tech of array) {
    const techName = { tech: tech, name: nome };
    lista.push(techName);
  }

  return lista;
};

let lista = techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas');
console.log(lista);

module.exports = techList;
