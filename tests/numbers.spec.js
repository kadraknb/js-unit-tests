const numbers = require('../src/numbers');

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers` retorna `true` quando o array contém apenas números e falso caso contrário', () => {
    expect(true).toEqual(numbers([1, 2, 3, 4, 5]));
    expect(false).toEqual(numbers([1, 2, '3', 4, 5]));
    expect(false).toEqual(numbers([1, 'a', 3]));
    expect(false).toEqual(numbers([' ']));
  });
});
