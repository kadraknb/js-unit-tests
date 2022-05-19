const createMenu = require('../src/restaurant');

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  const restaurante = createMenu()
  it('TESTE 1: Verifique se função `createMenu()` retorna um objeto que possui a chave `fetchMenu`, a qual tem como valor uma função.', () => {
    const meuRestaurante = createMenu();
    expect(typeof meuRestaurante.fetchMenu).toBe('function');
  });

  it(`TESTE 2: Verifique se objetoRetornado.fetchMenu() retorna um objeto cujas chaves são somente food e drink, 
     considerando que a função createMenu() foi chamada com o objeto: { food: {}, drink: {} }.` , () => {
    const restaurante = createMenu({ food: {}, drink: {} });
    expect(restaurante.fetchMenu()).toMatchObject({ food: {}, drink: {} });
  });

  it(`TESTE 3: Verifique se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função 'objetoRetornado.fetchMenu()'`, () => {
    const restMenu = createMenu({
      food: { 'coxinha': 3.90, 'sanduiche': 9.90 },
      drinks: { 'agua': 3.90, 'cerveja': 6.90 }
    });
    expect(restMenu.fetchMenu()).toEqual({
      food: { 'coxinha': 3.90, 'sanduiche': 9.90 },
      drinks: { 'agua': 3.90, 'cerveja': 6.90 }
    });
  });

  it(`TESTE 4: Verifique se 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.`, () => {

    expect(restaurante.consumption).toEqual([]);
  });

  it(`TESTE 5: Verifique se, ao chamar uma função associada à chave order no objeto retornado,
     passando uma string como parâmetro (como objetoRetornado.order('coxinha')), tal string é adicionada
     ao array retornado em objetoRetornado.consumption.` , () => {

    const restaurante0 = createMenu(1);
    
    restaurante0.order('coxinha');
    console.log(restaurante0.consumption);
    expect(restaurante0.consumption).toEqual(['coxinha']);
    restaurante0.consumption = [];
  });

  it(`TESTE 6: Verifique se, ao adicionar três pedidos, dentre bebidas e comidas, o array objetoRetornado.consumption contém os itens pedidos.`, () => {

    restaurante.order('coxinha');
    restaurante.order('agua');
    restaurante.order('sopa');
    restaurante.order('sashimi');
    expect(restaurante.consumption).toEqual(['coxinha', 'agua', 'sopa', 'sashimi']);
    restaurante.consumption = [];
  });

  it(`TESTE 7: Verifique se a função order aceita que pedidos repetidos sejam acrescidos a consumption.`, () => {

    restaurante.order('coxinha');
    restaurante.order('agua');
    restaurante.order('coxinha');
    expect(restaurante.consumption).toEqual(['coxinha', 'agua', 'coxinha']);
    restaurante.consumption = [];
  });

  it(`TESTE 8: Verifique se, ao chamar objetoRetornado.pay(), retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em objetoRetornado.consumption`, () => {
    const restMenu = createMenu({
      food: { 'coxinha': 3.90, 'sanduiche': 9.90 },
      drinks: { 'agua': 3.90, 'cerveja': 6.90 }
    });
    restMenu.order('coxinha');
    restMenu.order('agua');
    restMenu.order('coxinha');
    expect(restMenu.pay()).toEqual(12.87);
  });
});