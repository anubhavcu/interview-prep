// input
var user = {
  name: 'Vishal',
  address: {
    primary: {
      house: '109',
      street: {
        main: '21',
        cross: '32',
      },
    },
  },
};

let res = {};
function flattenObj(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      flattenObj(obj[key]);
    } else {
      res[key] = obj[key];
    }
  }
}

flattenObj(user);
console.log(res);

// * similar problem - find the average of numbers in recursive array

let arr = [
  3,
  null,
  [5, 6, undefined],
  false,
  [1, null, [2, [5, 6], 5], undefined],
];

let sum = 0,
  count = 0;
let findAvg = (arr) => {
  arr.forEach((item) => {
    if (item !== null && typeof item === 'object') {
      findAvg(item);
    } else {
      sum += typeof item === 'number' ? item : 0;
      count += typeof item === 'number' ? 1 : 0;
    }
  });
};
findAvg(arr);
console.log(sum / count);
