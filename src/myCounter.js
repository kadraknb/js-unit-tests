const myCounter = () => {
  let myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (let Counter = 2; Counter <= 3; Counter += 1) {
      myArray.push(Counter);
    }
  }
  return myArray;
};

module.exports = myCounter;
