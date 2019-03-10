let bubbleSort = require('./bubble');
let shakerSort = require('./shaker');
let gnomeSort = require('./gnome');

//get test arrays any length
let getRandomArrays = (arraysLength, arraysNumber) => {
  let list = [];
  let array = [];

  for (let i = 0; i < arraysNumber; i++) {
    for (let j = 0; j < arraysLength; j++) {
      array.push(Math.random() * arraysLength);
    }

    list.push(array);
  }

  return list;
};

//get copy arrays
let getCopy = arrays => arrays.map(array => [...array]);

//BenchMark, speed check
let benchMark = (callback, arrays) => {
  let start = new Date();

  arrays.forEach(array => callback(array));

  console.log(`${(new Date() - start) / 1000} sec`);

  return (new Date() - start) / 1000;
};

let arraysLength = 10000;
let arraysNumbers = 1;
let testArrays = getRandomArrays(arraysLength, arraysNumbers);

benchMark(bubbleSort, getCopy(testArrays));

benchMark(shakerSort, getCopy(testArrays));

benchMark(gnomeSort, getCopy(testArrays));
