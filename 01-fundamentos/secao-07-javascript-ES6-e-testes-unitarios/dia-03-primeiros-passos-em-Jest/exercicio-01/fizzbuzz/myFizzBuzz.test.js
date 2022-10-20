const myFizzBuzz = require('./myFizzBuzz');

describe('testes da função myFizzBuzz', ()=>{
  it('verifica retorno esperado', ()=>{
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(6)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(8)).toBe(8);
    expect(myFizzBuzz('15')).toBe(false);
  })
})