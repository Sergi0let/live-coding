// Hlib
// const withdraw = (clients, balances, client, amount) => {
// remote logic from if
// get rid of dubplicated code
// don't use find

// Bad
//   balances[clients.indexOf(client)];
//   if (balances.find((item, index) => clients.indexOf(client) === index) < amount) {
//     return -1;
//   }
//   return balances.find((item, index) => clients.indexOf(client) === index) - amount;
// };

// BAD
/*
const withdraw = (clients, balances, client, amount) => {
  const balance = balances[clients.indexOf(client)];

  return balances[clients.indexOf(client)] >= amount
    ? (balances[clients.indexOf(client)] -= amount)
    : -1;
};
*/

// -------------------------------
// Oleksij

// !BAD
/*
const withdraw = (clients, balances, client, amount) => {
  let clientBalance = balances[clients.indexOf(client)];
  if (clientBalance >= amount) {
    clientBalance -= amount;
    balances[clients.indexOf(client)] = clientBalance;
    return clientBalance;
  }

  return -1;
};
*/

// !GOOD
/*
const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);

  if (balances[clientIndex] < amount) {
    return -1;
  }

  // eslint-disable-next-line no-param-reassign
  balances[clientIndex] -= amount;
  return balances[clientIndex];
};
*/

// Sergij
/*
const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);
  balances[clientIndex] -= amount;

  return balances[clientIndex] > 0 ? balances[clientIndex] : -1;
};
*/
// NORM
/*
const withdraw = function (clients, balances, client, amount) {
  if (balances[clients.indexOf(client)] - amount < 0) {
    return -1;
  }
  balances[clients.indexOf(client)] -= amount;
  return balances[clients.indexOf(client)];
};
*/

// GOOD
/*
const withdraw = function (clients, balances, client, amount) {
  const clientIndex = clients.indexOf(client);

  if (balances[clientIndex] < amount) {
    return -1;
  }

  balances[clientIndex] -= amount;

  return balances[clientIndex];
};
*/

// Volodymyr
// NORM
/*
const withdraw = (clients, balances, client, amount) => {
  let clientIndex = clients.indexOf(client);
  return balances[clientIndex] < amount ? -1 : (balances[clientIndex] -= amount);
};
*/

// DIMA
/*
const withdraw = (clients, balances, client, amount) => {
  const clientBalance = balances[clients.indexOf(client)];

  return clientBalance < amount ? -1 : clientBalance - amount;
};
*/

// Olexandr
/*
const withdraw = (clients, balances, client, amount) => {
  if (balances[clients.indexOf(client)] > amount) {
    return (balances[clients.indexOf(client)] -= amount);
  } else {
    return -1;
  }
};
*/

// const getRandomNumbers = (length, from, to) => {
//   const arr = new Array(length);
//   if (to - from < 1) {
//     return null;
//   }
//   return arr.fill(Math.trunc(Math.random() * (Math.ceil(to) - Math.ceil(from)) + Math.ceil(from)));
// };

// const getRandomNumbers = (length, from, to) => {
//   const fromCeil = Math.ceil(from);
//   const toCeil = Math.ceil(to);

//   if (toCeil < fromCeil) {
//     return null;
//   }

//   return new Array(length)
//     .fill()
//     .map(() => Math.trunc(Math.random() * (toCeil - fromCeil) + fromCeil));
// };
// console.log(getRandomNumbers(8, 1.7, 5));
// console.log(getRandomNumbers(5, 0.5, 0.9));
