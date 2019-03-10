let bubbleSort = require('./bubble');
let shakerSort = require('./shaker');

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

//BenchMark, speed check
let benchMark = (callback, arrays) => {
  let start = new Date();

  arrays.forEach(array => callback(array));

  console.log(`${(new Date() - start) / 1000} sec`);

  return (new Date() - start) / 1000;
};

let arraysLength = 1000;
let arraysNumbers = 1;
let testArrays = getRandomArrays(arraysLength, arraysNumbers);

benchMark(bubbleSort, testArrays);
benchMark(shakerSort, testArrays);
