//Bubble sort
let bubbleSort = array => {
  let arrayLength = array.length - 1;

  for (let j = 0; j < arrayLength; j++) {
    for (let i = 0; i < arrayLength - j; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i + 1];

        array[i + 1] = array[i];
        array[i] = temp;
      }
    }
  }
};

module.exports = bubbleSort;
