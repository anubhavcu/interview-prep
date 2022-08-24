// Implement a function that takes a list of async functions as input and executes them in a series that is one at a time. The next task is executed only when the previous task is completed.

// * async generator
function genPromise(num) {
  let rand = Math.random() * 5;
  return new Promise((res) => {
    setTimeout(() => {
      res(num);
    }, rand * 1000);
  });
}

let promises = [];
for (let i = 0; i < 10; i++) {
  promises.push(genPromise(i));
}

// Promise.all(promises).then((ans) => console.log(ans));

// * method 1  => using async await
const runFuncInSeries1 = async (promises) => {
  for (let promise of promises) {
    const res = await promise;
    console.log(res);
  }
};

// runFuncInSeries1(promises);

// * recursivly calling same func unless list is empty
const runFuncInSeries2 = (promises) => {
  let currentPromise = promises.shift();

  currentPromise.then((ans) => {
    console.log(ans);
    if (promises.length > 0) {
      runFuncInSeries2(promises);
    }
  });
};

// runFuncInSeries2(promises);

// * using reduce - more elegant
const runFuncInSeries3 = (promises) => {
  promises.reduce((a, c) => {
    return a.then(() => {
      return c.then((ans) => console.log(ans));
    });
  }, Promise.resolve());
};

runFuncInSeries3(promises);
