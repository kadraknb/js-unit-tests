const restaurant = {
  fetchMenu: () => { },
  consumption: [],
  order: (aa) => {
    restaurant.consumption.push(aa);
  },
  pay: () => {
    let valor = null;
    const menu = Object.values(restaurant.fetchMenu());
    restaurant.consumption.forEach((element) => {
      for (let i = 0; i < menu.length; i += 1) {
        if (element in menu[i]) {
          valor += menu[i][element];
        }
      }
    });
    valor += ((valor * 10) / 100);
    return valor;
  },
};
const createMenu = (menu) => {
  restaurant.fetchMenu = () => menu;
  return restaurant;
};

module.exports = createMenu;