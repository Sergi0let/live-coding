// in: array, array
// out: obj
// algo
// 1. create new obj
// 2. iterate keylist
// 3. put key/value to the obj
/*
function buildObject(keysList, valuesList) {
  const obj = {};

  for (let index = 0; index < keysList.length; index += 1) {
    obj[keysList[index]] = valuesList[index];
  }
  return obj;
}
*/
/*
function buildObject(keysList, valuesList) {
  return keysList.reduce((obj, key, index) => {
    obj[key] = valuesList[index];
    return obj;
  }, {});
}
*/

// function buildObject(keysList, valuesList) {
//   return keysList.reduce((obj, key, index) => ({ ...obj, [key]: valuesList[index] }), {});
// }

// examples
/*
const keys = ['name', 'address', 'age', 'name'];
const values = ['Bob', 'Ukraine', 34, 'James'];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result);

const keys2 = ['name', 'obj', null, 98];
const values2 = ['Bob', { price: 100, status: true }, 34];
const result2 = buildObject(keys2, values2); // ==> {0: 'Ukraine', 98: undefined, name: 'Bob', null: 34}
console.log(result2);

const keys3 = ['hobbies', 'work'];
const values3 = ['Painting', true, 34, 'Ukraine'];
const result3 = buildObject(keys3, values3); // ==> {hobbies: 'Painting', work: true}
console.log(result3);

const keys4 = ['name', 'address', 'age'];
const values4 = ['Bob'];
const result4 = buildObject(keys4, values4); // ==> {name: 'Bob', address: undefined, age: undefined}
console.log(result4);
*/

// ------------------------------------------
// in obj, obj
// out: Boolean

// logo:
// 1. get keys1 , keys2
// 2. if Length 1 ! == length2 ==> false
// 3. iterate keys1
// 4. compare key1/value1 with key2/value2
// 5.if (step 4=== false) ==> false

/*
function compareObjects(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
*/

/*
function compareObjects(obj1, obj2) {
  const objKeys = obj => Object.keys(obj).join('');
  const objValues = obj => Object.values(obj).join();

  return objKeys(obj1) === objKeys(obj2) && objValues(obj1) === objValues(obj2);
}
*/
/*
function compareObjects(obj1, obj2) {
  const createObjString = obj => Object.entries(obj).flat().join('');
  return createObjString(obj1) === createObjString(obj2);
}
*/

// const objKeys = obj => Object.keys(obj);
// const entriesObj = obj => Object.entries(obj).flat();

// function compareObjects(obj1, obj2) {
//   if (objKeys(obj1).length !== objKeys(obj2).length) {
//     return false;
//   }

//   return entriesObj(obj1).every(elem => entriesObj(obj2).includes(elem));
// }

function compareObjects(obj1, obj2) {
  const keysOne = Object.keys(obj1);

  if (keysOne.length !== Object.keys(obj2).length) {
    return false;
  }

  return !keysOne.some(key => obj1[key] !== obj2[key]);
}

// // examples
const obj1 = {
  name: 'Tom',
  age: 33,
  email: null,
};

const obj2 = {
  age: 33,
  email: null,
  name: 'Tom',
};

const obj3 = {
  name: 'Bob',
  age: 17,
};

const obj4 = {
  name: 'Bob',
  age: 17,
};
const obj5 = {
  name: 'Bob',
  age: 17,
};

const obj6 = {
  addres: 'Lviv',
  name: 'Bob',
  age: 17,
};

console.log('res 1 ', compareObjects(obj1, obj2)); // ==> true
console.log('res 2 ', compareObjects(obj2, obj3)); // ==> false
console.log('res 3 ', compareObjects(obj1, obj4)); // ==> false
console.log('res 4 ', compareObjects(obj3, obj4)); // ==> true
console.log('res 5 ', compareObjects(obj5, obj6)); // ==> false
