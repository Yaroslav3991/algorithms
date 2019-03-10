let gnomeSort = array => {
  let arrayLength = array.length;

  for (let i = 1; i < arrayLength; ) {
    if (array[i] < array[i - 1]) {
      let temp = array[i - 1];

      array[i - 1] = array[i];
      array[i] = temp;

      if (i > 1) {
        i--;
        continue;
      }
    }

    i++;
  }
};

module.exports = gnomeSort;
