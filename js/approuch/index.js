// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// input : number,
// output: indefined,

// algo
// 1. iterate from 2 to num++.
// 2. check if N is prime.
// 2.1 iterate from 2 to N.
// 2.2 if N % iterator === 0 then NOT prime.
// 3. if prime - print it/

/*
function getPrimes(num) {
  for (let number = 2; number <= num; number += 1) {
    let isPrime = true;

    console.log('CHECKING NUMBER: ' + number);

    for (let index = 2; index < number; index += 1) {
      if (number % index === 0) {
        console.log('NUMBER is not Prime: ' + number);

        isPrime = false;
      }
    }

    if (isPrime) {
      console.log(number);
    }
  }
}
getPrimes(15);
*/

// algo
// 1. створюємо функцію getPrimes проходимся по числах з 2 до N.
// 2. потрібно взнати чи N є простим.
// 2.1 Створюємо функцію isPrime яка буде ділити N  на його ітератори.
// 2.2 isPrime не находить дільника окрім самого себе і число більше 1 воно просте.
// 3. В функції getPrimes на кожній ітерації перевіряємо за допомогою функції isPrime чи воно просте.
// 4. Якщо функція isPrime вертає true, виводимо в console число.
// 5. Додатково в  isPrime перевіряємо чи воно не мінусове.

function getPrimes(num) {
  for (let number = 1; number <= num; number += 1) {
    if (isPrime(number)) {
      console.log(number);
    }
  }
}

// test data getPrimes
// getPrimes(2); // 2
// getPrimes(3); // 3
getPrimes(4); // no result
// getPrimes(5); // 5
// getPrimes(-5); //  no result
// getPrimes(6); // no result

function isPrime(number) {
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return number > 1;
}
/* 
// test data isPrime
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
console.log(isPrime(6)); // false
console.log(isPrime(7)); // true
console.log(isPrime(-7)); // false
*/
