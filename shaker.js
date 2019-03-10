//Shaker sort
let shakerSort = array => {
  let arrayLength = array.length;
  let lengthForMainLoop = Math.floor(arrayLength / 2);

  for (let mainCounter = 0; mainCounter < lengthForMainLoop; mainCounter++) {
    for (let i = arrayLength - mainCounter - 1; i > mainCounter; i--) {
      if (array[i] < array[i - 1]) {
        let temp = array[i - 1];

        array[i - 1] = array[i];
        array[i] = temp;
      }
    }

    for (let i = mainCounter; i < arrayLength - mainCounter - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i + 1];

        array[i + 1] = array[i];
        array[i] = temp;
      }
    }
  }
};

module.exports = shakerSort;
