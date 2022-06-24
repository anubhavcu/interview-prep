// Implement like this:
// const result = calc.add(10).multiply(5).subtract(30).add(10);
// console.log('result', result.total);

const calc = {
  total: 0,
  add: function (num) {
    this.total += num;
    return this; // returning this(which points to object 'calc', so that we can chain this with other functions, so after calc.add(10), we are getting calc obj again, and so we can then call .multiply(5) means calc.multiply(5)
  },
  multiply: function (num) {
    this.total *= num;
    return this;
  },
  subtract: function (num) {
    this.total -= num;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log('result', result.total);
