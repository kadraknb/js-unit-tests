const average = (arr) => {
  let so = null;
  if (arr.length === 0) {
    return undefined;
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'number') {
      so += arr[i];
    } else {
      return undefined;
    }
  }
  return Math.round(so / arr.length);
};
module.exports = average;
