function getSenseOfLife() {
  return 42;
}

// --- test data

// option 1
const res = getSenseOfLife();
console.log(res);

// func 2
function getSquared(num) {
  return num * num;
}

// --- test data
const res2 = getSquared(2);
console.log(res2);

// func 3
function sum(num_1, num_2) {
  return num_1 + num_2;
}

// --- test data
console.log(sum(3, 4));

// func 4
function printMessage(age) {
  return !Number(age) ? null : `I am ${age} years old`;
}

// --- test data
// console.log(printMessage('twenty'));
// console.log(printMessage(33));
// console.log(printMessage('33'));
// console.log(printMessage(null));
// console.log(printMessage(undefined));
// console.log(printMessage(NaN));
// console.log(printMessage(Infinity));

// func 5
function sumFunc(from, to) {
  let res = 0;
  for (let index = from; index <= to; index += 1) {
    res += index;
  }
  return res;
}
console.log(sumFunc(1, 9));
console.log(sumFunc(-2, 2));

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  return sumFunc(firstFrom, firstTo) > sumFunc(secondFrom, secondTo);
}

// console.log(compareSums(4, 5, 4, 4));
// console.log(compareSums(-5, 4, 1, '4'));

// console.log(compareSums(4, 4, 4, 4));
// console.log(compareSums(-5, 4, 1, '4'));

// func 6
const mult = (numOne, numTwo) => numOne * numTwo;

// --- test data
// console.log(mult(2, 4));
// console.log(mult('2', 4));
// console.log(mult(-4, '5'));
// console.log(mult(-3, 2));

// func 6
const square = num => num * num;

// --- test data
console.log(square(2));
console.log(square(-2));
console.log(square('2'));
console.log(square(0));

// func 6

const getMagicNumber = () => 17;
// --- test data
console.log(getMagicNumber());
console.log(getMagicNumber(1));
console.log(getMagicNumber(23));
console.log(getMagicNumber('1'));
