const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

const expectedResult = 20;

function containsA() {
  let count = 0;
  names.forEach((name) => {
    const letters = name.split('');
    count += letters.reduce((acc, curr) => {
      if (curr.toUpperCase() === 'A') {
        return (acc += 1);
      }
      return acc;
    }, 0);
  });
  return count;
}

console.log(containsA());
