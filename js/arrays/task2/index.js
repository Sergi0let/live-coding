const numbersList = [5, 0, 8, 10, -4, 50, 220];
console.log(numbersList);

//  MAP
// input: callback
// output: array

// MAP CALLBACK
// callback
// input: elem, index, array
// output: elem

// option 1
const mapRes = numbersList.map(el => {
  const newEl = el * el;
  return newEl;
});
console.log(mapRes);

// option 2
const mapRes2 = numbersList.map(el => el * el);
console.log(mapRes);

// option 3
const mapRes3 = numbersList.map((el, index) => {
  if (index > 2) {
    return el * el;
  }
  return el;
});
console.log(mapRes3);

// option 4
const mapRes4 = numbersList.map((el, index) => (index > 2 ? el * el : el));
console.log(mapRes4);

// ---------------------------------------------
console.log('----------FOR EACH---------------');

// input: callback
// output: undefined
// ЗАДАЧА проітерувати масив
numbersList.forEach(el => {
  return el > 0 ? console.log(el) : null;
});

// ---------------------------------------------
console.log('---------- REDUCE---------------');
const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];
// callback, acc init value(options)
// number

// callback
// input: acc, element, index(optional) , array(optional)
// output: new Accumulator

const reduceSum = transactions.reduce((sum, el) => {
  console.log('sum', sum);
  console.log('el', el);

  if (el > 100) {
    return sum + el;
  }

  return sum;
}, 0);
console.log(reduceSum);

const reduceSum2 = transactions.reduce((sum, el) => (el > 100 ? sum + el : sum), 0);
console.log(reduceSum2);
