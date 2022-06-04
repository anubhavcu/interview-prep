//  a. implement a function which takes a value, returns a promise wrapping the value and resolves it after a random delay

function genPromise(num) {
  var rand = Math.random() * 5;
  //   console.log(rand);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(num);
    }, rand * 1000);
  });
}

// genPromise(5).then((ans) => console.log(ans));

//  b. call the function in a loop and print the numbers 1 to 10

var result = [];
for (var i = 1; i <= 10; i++) {
  result.push(genPromise(i));
}

// console.log(result); // list of promises- pending
Promise.all(result).then((res) => console.log(res)); // promise.all takes in an array of promises and returns a new Promise which when resolved gives an array of resolved values or err if any of them gets rejected
// Promise.all only returns value when all promises are resolved

// console.log(Promise.all(result));  // promise

// c. add some mechanism such that even with random delay, the numbers are printed in order as soon as they are resolved (since promise.all is waiting for all promises to be resolved )
async function print(promises) {
  for (var i = 0; i < promises.length; i++) {
    var ans = await promises[i];
    console.log(ans);
  }
}
print(result);
// * polyfill for Promise.all
Promise.myAll = function (promises) {
  var result = [],
    completed = 0;
  return new Promise((res, rej) => {
    promises.forEach((promise, index) => {
      promise
        .then((ans) => {
          result[index] = ans;
          completed += 1;
          if (completed === promises.length) {
            res(result);
          }
        })
        .catch((err) => {
          rej(err);
        });
    });
  });
};

Promise.myAll(result).then((ans) => console.log(ans));
