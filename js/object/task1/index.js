// input obj string value
// output obj

/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}
// examples
const transaction = {
  value: 170,
};
// console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }

// #2
function addPropertyV2(obj, key, value) {
  // input : obj;
  // input: old obj with new proparty
  return Object.assign(obj, { [key]: value });
}
// examples
const transaction2 = {
  value: 170,
};
// console.log(addPropertyV2(transaction2, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// console.log(transaction2);
// console.log(addPropertyV2(transaction2, 'name', 'John')); // ==> {value: 170, currency: 'USD', name: 'John'}
// console.log(addPropertyV2(transaction2, 'city', 'New York')); // ==> {value: 170, currency: 'USD', name: 'John', city: 'New York'}

// #3
function addPropertyV3(obj, key, value) {
  // input :  {}, obj,  obj
  // input: new obj
  return Object.assign({}, obj, { [key]: value });
}
// examples
// const transaction3 = {
//   value: 170,
// };
// const res1 = addPropertyV3(transaction3, 'currency', 'USD');
// const res2 = addPropertyV3(res1, 'amount', '300');
// console.log(res1);
// console.log('result 1c', res2);
// console.log('result 2 ', res2);
// console.log('obj after', transaction3);
// #4
function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}
// examples
const transaction3 = {
  value: 170,
};
const res1 = addPropertyV4(transaction3, 'currency', 'USD');
const res2 = addPropertyV4(res1, 'amount', '300');
console.log(res1);
console.log('result 1 -', res2);
console.log('result 2 -', res2);
console.log('obj after', transaction3);
