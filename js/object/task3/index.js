// in: obj
// out: array sort

// algo#1
// 1. Create arrays from object
// 2. create new array.
// 3. Iterate for properties and compare it
// 4. Sort age in ascending order

// algo#2
// 1. get array of key-value -entries
// 2. iterate array of entries - on every step create new obj
// 3. sort Array

// algo#3
// 1. get array of key-keys - ['key1', 'key2', ...]
// 2. iterate array keys - on every step create new obj
// 3. sort array & return it
// Draft solution
// const getCustomersListDraft = obj => {
//   const arrays = Object.entries(obj);
//   const result = [];
//   // eslint-disable-next-line no-restricted-syntax
//   for (const prop of arrays) {
//     const id = { id: prop[0] };
//     const rest = prop[1];
//     const objRes = { ...id, ...rest };

//     result.push(objRes);
//   }
//   return result.sort((a, b) => a.age - b.age);
// };

// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, descrioption]) => ({ id, ...descrioption }))
//     .sort((a, b) => a.age - b.age);

// --------------------------------------------------------------
// const getCustomersList = obj =>
//   // input: obj
//   // output: [[key, val1], [key2, val2]]
//   Object.entries(obj)
//     .map(entry => {
//       // const obj = {};
//       // Object.assign(obj, { id: entry[0] });
//       // return Object.assign(obj, entry[1]);
//     })
//     .sort((a, b) => a.age - b.age);

// -------------------------------------------------------------
/*
const getCustomersList = obj => {
  return Object.entries(obj)
    .map(arr => ({ ...arr[1], id: arr[0] }))
    .sort((a, b) => a.age - b.age);
};
*/
// --------------------------------------------------------------
// 1. use push instead concat
// 2. use map intead of concat
// 3. rename data
/*
const getCustomersList = customers =>
  Object.entries(customers)
    .reduce((acc, [id, data]) => acc.concat({ id, ...data }), [])
    .sort((a, b) => a.age - b.age);
*/
// -------------------------------------------------------------
/*
const getCustomersList = obj =>
  Object.entries(obj)
    .map(([id, customer]) => ({ id, ...customer }))
    .sort((customerFirst, customerSecond) => customerFirst.age - customerSecond.age);
*/
// -------------------------------------------------------------
// BAD
// 1. Don't use values
// 2. Dont't use index
// 3. bad naming (el)
/*
const getCustomersList = obj => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  return values.map((el, index) => ({ ...el, id: keys[index] })).sort((a, b) => a.age - b.age);
};
*/
/*
const getCustomersList = obj => {
  return Object.keys(obj)
    .map(key => ({ ...obj[key], id: key }))
    .sort((a, b) => a.age - b.age);
};
*/
// -------------------------------------------------------------
// BAD
// 1 Don't use values
// 2. Don't use index
// 3. bad naming
// 4. remove redunt variables
/*
const getCustomersList = obj => {
  const customersIdList = Object.keys(obj);

  const resultArray = Object.values(obj)
    .map((customerIdValue, index) => ({ ...customerIdValue, id: customersIdList[index] }))
    .sort((a, b) => a.age - b.age);
  return resultArray;
};
*/

// -------------------------------------------------------------
/*
const getCustomersList = obj => {
  if (obj === {}) {
    return [];
  }

  const keys = Object.keys(obj);
  const arr = Object.values(obj);

  arr.map((el, index) => {
    el.id = keys[index];
  });
  arr.sort((a, b) => +a.age - +b.age);

  console.log(arr);
  console.log(obj);

  return arr;
};
*/
// -------------------------------------------------------------
// BAD
// 1. don't use shift
// 2. fix eslints errors
// 3. bad naming
// 4. rebunting variable
/*
const getCustomersList = obj => {
  const moderArr = Object.entries(obj).map(arr => {
    let id = { id: arr.shift() };
    return (arr[0] = { ...arr[0], ...id });
  });

  return moderArr.sort((a, b) => a.age - b.age);
};
*/
// -------------------------------------------------------------
// 1. dont user index
// 2. bad naming
/*
const getCustomersList = customers =>
  Object.keys(customers)
    .reduce((acc, elem, index) => {
      acc[index] = { id: elem, ...customers[elem] };
      return acc;
    }, [])
    .sort((a, b) => a.age - b.age);
*/
// -------------------------------------------------------------

// BAD
const getCustomersList = obj => {
  // obj is the object we want to get the keys from
  const order = Object.entries(obj).sort((a, b) => a[1].age - b[1].age); // sort the object by age
  const first = order.map(el => el[1]); // get the values
  const second = order.map(el => el[0]); // get the keys
  return first.map((el, index) => ({ ...el, id: second[index] })); // print the values and keys
};
// -------------------------------------------------------------
// test-data
const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-3': {
    name: 'Bob',
    age: 16,
    addres: 'Kyiv',
  },
  'customer-id-4': {
    name: 'John',
    addres: 'Kyiv',
  },
};
// const resultDraft = getCustomersListDraft(customers);
// console.log('Draft: ', resultDraft);

const result = getCustomersList(customers);
console.log('Refactoring: ', result);
