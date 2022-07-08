/* eslint-disable no-restricted-syntax */

// const arr = [2, 1, 6, 22, 14];

// *filter Array
// input: callback,  arr
// output: new array

// *filter callback
// input: arrElement , index, array(optionaal)
// output: boolean

// *algo
// 1. create new arr
// 2. iterate array
// 3. apply callback for every el
// 4. if true - push
// 5. return arr ++

// const filterArrayElements = (arr, callback) => {
//   const resArr = [];

//   for (let index = 0; index < arr.length; index += 1) {
//     const el = arr[index];
//     if (callback(el, index, arr)) {
//       resArr.push(el);
//     }
//   }
//   return resArr;
// };
// // -- test data
// const testArr = [1, 20, 2, 11, 0, -5, 5, 4, 50, 8, NaN];
// const testCallback = (el, index, arr) => {
//   if (index > 5 && el > 10) {
//     return true;
//   }
//   return false;
// };
// console.log(filterArrayElements(testArr, testCallback));

// const test = (arrElement, index, entireArr) => arrElement > index;
// const test2 = (arrElement, index, entireArr) => arrElement % 2 === 0;
// console.log(filterArrayElements([2, 1, 6, -6, 0], test));
// console.log(filterArrayElements([2, 1, 6, 4, 9], test2));

// --- multiply
// number1, number2, number3 ...
// function multiply(...args) {
//   return args.reduce((acc, el) => acc * el);
// }

// // test-data
// console.log(multiply(10, 2, 5, 7, -2));

// *mapArrayElements
// input: callback, arr
// output: new array === old array

// *mapArrayElements callback
// input: arrElement , index, entireArr
// output: element of array

// *algo
// 1. create new arr
// 2. iterate array
// 3. apply callback for every el
// 4. some manipulation on element of arr
// 5. return arr ++

const mapArrayElements = (arr, callback) => {
  const resArr = [];

  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    const elRes = callback(el, index, arr);
    resArr.push(elRes);
  }
  return resArr;
};

// test-data;

console.log(mapArrayElements([1, 0, -5, 76, 1.2, '33'], (el, index, arr) => el + 2));
console.log(mapArrayElements([1, 0, -5, 76, 1.2, '33'], (el, index, arr) => el * el));
console.log(
  mapArrayElements([1, 0, -5, 76, -1.2, '33'], (el, index, arr) => (el <= index ? el + index : el)),
);
console.log(
  mapArrayElements(['Gary', 'Jack', 44, '98'], (el, index, arr) =>
    typeof el === 'string' ? `Hello ${el}` : el,
  ),
);
