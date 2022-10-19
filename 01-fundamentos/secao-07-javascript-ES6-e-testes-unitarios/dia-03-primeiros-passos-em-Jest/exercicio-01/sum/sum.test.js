const sum = require('./sum');

describe('testes da função soma', () => {
  test('soma entre 4 e 5', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('soma entre 0 e 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('verifica se erro é lançado ao somar number com string', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });
  test('verifica mensagem de erro', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(new Error('parameters must be numbers'));
  });
});
