const calculator = (number1, number2) => {
  const so = number1 + number2;
  const mu = number1 * number2;
  const di = Math.floor(number1 / number2);
  const su = number1 - number2;

  return {
    sum: so,
    mult: mu,
    div: di,
    sub: su };
};

const arrayGenerator = (type, object) => {
  // return Object.type(object);

  switch (type) {
    case 'keys':
      return Object.keys(object);

    case 'values':
      return Object.values(object);

    case 'entries':
      return Object.entries(object);
      // no default
  }
};
module.exports = { calculator, arrayGenerator };
