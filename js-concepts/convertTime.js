const inputs = ['12:10AM', '5:49AM', '12:10PM', '1:10PM', '10:10PM'];

// Output
// 00:10
// 05:49
// 12:10
// 13:10
// 22:10

function convertTime(inputs) {
  let result = [];
  for (let time of inputs) {
    let zone = time.slice(time.length - 2),
      colonIndex = time.indexOf(':'),
      hours = time.slice(0, colonIndex),
      minutes = time.slice(colonIndex + 1, time.length - 2);

    if (zone === 'AM') {
      hours = hours < 12 ? '0' + hours : hours === '12' ? '00' : hours;
    } else {
      hours = hours < 12 ? Number(hours) + 12 : hours;
    }

    result.push(hours + ':' + minutes);
  }
  return result;
}
console.log(convertTime(inputs));
