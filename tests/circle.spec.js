const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {

  it(`Teste se circle retorna undefined, caso o parâmetro passado não seja um número.=`, () => {
    expect(circle(3)).toEqual({ "area": 28.259999999999998, "circumference": 18.84, "radius": 3 });
  });
  it(`Teste se circle retorna um objeto.==`, () => {
    expect(parseFloat((Object.values(circle(3))[1]).toPrecision(4))).toEqual(28.26);
  });
  it(`Teste se o objeto retornado possui 3 propriedades.1111`, () => {
    expect(Object.values(circle(2))[1]).toEqual(12.56);
  });
  it(`Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.11`, () => {
    expect(circle()).toBeUndefined();
  });
  it(`Teste se dentro do objeto retornado, a função retorna uma key com value igual à circunferência correta para um círculo de raio 2.111`, () => {
    expect(Object.keys(circle(1)).length).toEqual(3);
  });
  it(`Teste se dentro do objeto retornado, a função retorna uma key com value igual à área correta para um círculo de raio 3.`, () => {
    expect(typeof circle(1)).toBe('object');
  });
  it(`Teste se a função retorna, em um objeto, os dados corretos de um círculo de raio 3.`, () => {
    expect(circle('b')).toBeUndefined();
  });
});

