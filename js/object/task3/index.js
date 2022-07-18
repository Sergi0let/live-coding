// in: obj
// out: array sort

// 1. Create array
// 2. Iterate for property and compare it
// 3. Sort age

const getCustomersList = obj =>
  Object.entries(obj)
    .map(([id, descrioption]) => ({ id, ...descrioption }))
    .sort((a, b) => a.age - b.age);
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
const result = getCustomersList(customers);
console.log(result);
