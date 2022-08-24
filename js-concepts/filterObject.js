// * restriction - in place filtering
const obj = {
  a: 1,
  b: {
    c: 'Hello',
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: 'World',
  },
};
// funtion filter = (s) => typeof s === 'string';

// Output
// {
// 	b: {
// 	  c: "Hello World",
// 	  h: "Good Night Moon",
// 	}
// };
const deepFilter = (obj, filter) => {
  for (let key in obj) {
    const val = obj[key];

    if (typeof val === 'object') {
      deepFilter(val, filter);
    } else {
      // normal value
      // remove value in condition fails
      if (filter(val) === false) {
        delete obj[key];
      }
    }

    //delete value if empty obj
    if (JSON.stringify(val) === '{}') {
      delete obj[key];
    }
  }
};
// deepFilter(obj, (s) => typeof s === 'string');
deepFilter(obj, (s) => typeof s === 'number');
console.log(obj);
