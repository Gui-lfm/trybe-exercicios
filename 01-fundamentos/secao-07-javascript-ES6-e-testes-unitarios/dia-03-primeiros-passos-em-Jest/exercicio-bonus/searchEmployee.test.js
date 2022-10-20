const searchEmployee = require('./searchEmployee');

describe('testes da função searchEmployee', () => {
  it('Testa se a função searchEmployee é definida', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Testa se a função retorna o dado requisitado caso sejam informados valores válidos', () => {
    expect(searchEmployee('1256-4', 'firstName')).toBe('Linda');
    expect(searchEmployee('1256-4', 'lastName')).toBe('Bezos');
    expect(searchEmployee('1256-4', 'specialities')).toEqual([
      'Hooks',
      'Context API',
      'Tailwind CSS',
    ]);
    
    expect(searchEmployee('9852-2-2', 'firstName')).toBe('Jeff');
    expect(searchEmployee('9852-2-2', 'lastName')).toBe('Cook');
    expect(searchEmployee('9852-2-2', 'specialities')).toEqual(['Ruby', 'SQL']);
    
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    expect(searchEmployee('8579-6', 'lastName')).toBe('Gates');
    expect(searchEmployee('8579-6', 'specialities')).toEqual(['UX', 'Design']);
  });
  it('Testa se a função lança erro caso id seja inválido', ()=>{
    expect(()=>{
      searchEmployee('1', 'firstName')
    }).toThrow();
  })
  it('Verifica a mensagem de erro caso id seja inválido', ()=>{
    expect(()=>{
      searchEmployee('1', 'firstName')
    }).toThrow(new Error('ID não identificada'));
  })
  it('Testa se a função lança erro caso detalhe seja inválido', ()=>{
    expect(()=>{
      searchEmployee('1256-4', 'abcde')
    }).toThrow();
  })
  it('Verifica a mensagem de erro caso detalhe seja inválido', ()=>{
    expect(()=>{
      searchEmployee('1256-4', 'abcde')
    }).toThrow(new Error('Informação indisponível'));
  })
});
