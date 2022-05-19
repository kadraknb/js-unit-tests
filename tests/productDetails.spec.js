const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    
    expect(typeof productDetails).toBe('function')
    expect(Array.isArray(productDetails('sim', 'nao'))).toBe(true)
    expect(productDetails('sim', 'nao').length).toBe(2)
    expect(typeof productDetails('sim', 'nao')[0]).toBe('object')
    expect(typeof productDetails('sim', 'nao')[1]).toBe('object')
    expect(productDetails('sim', 'nao')[0] !== productDetails('sim', 'nao')[1]).toBe(true)
    expect(Object.values(productDetails('sim', 'nao')[0])[1].productId.slice(3)).toBe('123')
    expect(Object.values(productDetails('sim', 'nao')[1])[1].productId.slice(3)).toBe('123')
  });
});
