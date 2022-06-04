// * polyfill for call, apply and bind

var obj = {
  firstName: 'john',
  lastName: 'doe',
};

function greeting(age, city, msg) {
  console.log(this.firstName, this.lastName, age, city, msg);
}

var objFunc1 = greeting.bind(obj, 25, 'Delhi');
objFunc1('bind');
// bind
Function.prototype.myBind = function (obj, ...args) {
	console.log('inside my bind', this);
  var fn = this;
  return function (...params) {
    //     fn.call(obj, ...[...args, ...params]);
    fn.apply(obj, [...args, ...params]);
  };
};

var objFunc2 = greeting.myBind(obj, 25, 'Delhi');
objFunc2('my bind');

// call
Function.prototype.mycall = function (obj, ...args) {
  obj.fn = this;
  obj.fn(...args);
};

// apply
Function.prototype.myapply = function (obj, args) {
  obj.fn = this;
  obj.fn(...args);
};

greeting.call(obj, 25, 'Delhi', 'call');
greeting.mycall(obj, 25, 'Delhi', 'mycall');
greeting.apply(obj, [25, 'Delhi', 'apply']);
greeting.myapply(obj, [25, 'Delhi', 'myapply']);

// * polyfills for map, filter , reduce
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach
Array.prototype.myForEach = function (cb) {
  for (var i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

// arr.forEach((item) => console.log(item));
// arr.myForEach((item, index, arr) => console.log(item, index, arr));

// map
Array.prototype.myMap = function (callback) {
  var res = [];
  for (var i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this));
  }

  return res;
};

// console.log(arr.myMap((item) => item * 2));

// filter
Array.prototype.myFilter = function (callback) {
  var res = [];
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

// console.log(arr.myFilter((item) => item % 2 === 0));

// reduce
Array.prototype.myReduce = function (callback, initialValue) {
  var acc = initialValue;
  for (var i = 0; i < this.length; i++) {
    if (acc !== undefined) {
      acc = callback(acc, this[i], i, this);
    } else {
      acc = this[i];
    }
  }

  return acc;
};

// console.log(arr.myReduce((acc, item) => item + acc));
// console.log(arr.myReduce((acc, item) => item + acc, 100));
