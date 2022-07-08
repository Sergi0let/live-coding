// POP
// input: none;
// output: number / element last element

const numbersList1 = [1, 2, 3, 4, 5];
console.log('before on ', numbersList1);

const lastNumber = numbersList1.pop();

console.log('after on ', numbersList1);

// PUSH
// inptut: element (number)
// output: new length of array
const numbersList2 = [1, 2, 3, 4, 5];
console.log('Before push', numbersList2);

const pushRes = numbersList2.push(7777);
console.log('After push', numbersList2);

// SHIFT
// input: none;
// output: first element
const numbersList3 = [1, 2, 3, 4, 5];
console.log('Before shift', numbersList2);

const shiftRes = numbersList3.shift();
console.log('After push', numbersList3);

// FILTER
// input: function;
// output: new Array;
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];
console.log('Before FILTER', anotherNumbersList);

const filterRes = anotherNumbersList.fillter((a, b) => a - b);
console.log('After FILTER', anotherNumbersList);

input: element (any type), index (optional), array (optional);
// output: boolian;
// option 1
const filterRes2 = anotherNumbersList.filter(function filterCallback(element) {
  return element > 5;
});
// console.log(filterRes2);

// option 1
anotherNumbersList.filter(el => el > 5);
console.log(filterRes2);

function sum(from, to, resolver) {
  let sumRes = 0;
  for (let index = from; index <= to; index += 1) {
    sumRes += index;
  }
  resolver(sumRes);
}

function resolver(input) {
  console.log(input);
}
// test - data;
console.log(sum(1, 10, resolver));
console.log(resolver(100));
