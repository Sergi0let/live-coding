// Hlib
// const withdraw = (clients, balances, client, amount) => {
// remote logic from if
// get rid of dubplicated code
// don't use find

// good 4
//   balances[clients.indexOf(client)];
//   if (balances.find((item, index) => clients.indexOf(client) === index) < amount) {
//     return -1;
//   }
//   return balances.find((item, index) => clients.indexOf(client) === index) - amount;
// };

const withdraw = (clients, balances, client, amount) => {
  const currentClient = clients.indexOf(client);

  return balances[clients.indexOf(client)] >= amount
    ? (balances[clients.indexOf(client)] -= amount)
    : -1;
};
