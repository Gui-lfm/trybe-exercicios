const myRemove = require('./myRemove');

describe('testes com a função myRemove', () => {
  test('verifica se remove o item desejado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('verifica se não remove o item desejado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('verifica se item é adicionado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
