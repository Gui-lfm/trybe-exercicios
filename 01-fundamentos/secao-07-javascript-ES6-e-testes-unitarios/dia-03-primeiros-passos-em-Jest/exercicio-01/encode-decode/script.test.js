const {encode, decode} = require('./script')

describe('testes da função encode e decode', ()=>{
  it('verifica se são funções', ()=>{
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  })
  it('verifica se encode transforma vogais', ()=>{
    expect(encode('aeiou')).toBe('12345');
  })
  it('verifica se decode transforma numeros', ()=>{
    expect(decode('12345')).toBe('aeiou');
  })
  it('verifica comportamento com outras letras/numeros', ()=>{
    expect(encode('barata')).toBe('b1r1t1');
    expect(decode('1994')).toBe('a99o');
  })
  it('verifica se o tamanho do valor retornado é igual ao recebido', ()=>{
    expect(encode('abcde').length).toEqual(5);
    expect(decode('12345').length).toEqual(5);
  })
})