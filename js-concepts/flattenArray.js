let arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];

// op => [1,2,3,4,5,6,7,8,9,10,11,12]

let res = [];
let flattenArr = (arr) => {
  for (let item = 0; item < arr.length; item++) {
    if (Array.isArray(arr[item])) {
      flattenArr(arr[item]);
    } else {
      res.push(arr[item]);
    }
  }
};
flattenArr(arr);
console.log(res);

function a() {
  for (var i = 0; i < 5; i++) {
    function timer(val) {
      setTimeout(() => {
        console.log(val);
      }, 1000);
    }
    timer(i);
  }
}
a();
