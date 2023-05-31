// for1
// function printIntegers(a, b) {
//     let count = 0;
//     for (let i = a; i <= b; i++) {
//       console.log(i);
//       count++;
//     }
//     console.log("Chiqarilgan sonlar soni: " + count);
//   }
  
//   // Example usage
//   printIntegers(3, 8);
  
// for2
// function printIntegersDescending(a, b) {
//     let count = 0;
//     for (let i = b; i >= a; i--) {
//       console.log(i);
//       count++;
//     }
//     console.log("Chiqarilgan sonlar soni: " + count);
//   }
  
//   // Example usage
//   printIntegersDescending(3, 8);
  
// for3
// function calculateCandyPrice(weight, pricePerKg) {
//     console.log("1 kg konfet narxi: " + pricePerKg + " so'm");
//     console.log(weight + " kg konfet narxi: " + (weight * pricePerKg) + " so'm");
//   }
  
//   // Example usage
//   calculateCandyPrice(2, 5000);
  

// for4
// function calculateCandyPriceWithIncrement(weight, pricePerKg) {
//     console.log("1 kg konfet narxi: " + pricePerKg + " so'm");
//     for (let i = 1.2; i <= weight; i += 0.2) {
//       console.log(i.toFixed(1) + " kg konfet narxi: " + (i * pricePerKg) + " so'm");
//     }
//   }
  
//   // Example usage
//   calculateCandyPriceWithIncrement(1.8, 5000);
  
// for5
// function sumIntegers(a, b) {
//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//       sum += i;
//     }
//     console.log("Butun sonlar yig'indisi: " + sum);
//   }
  
//   // Example usage
//   sumIntegers(1, 5);
  
// for6
// function multiplyIntegers(a, b) {
//     let product = 1;
//     for (let i = a; i <= b; i++) {
//       product *= i;
//     }
//     console.log("Butun sonlar ko'paytmasi: " + product);
//   }
  
//   // Example usage
//   multiplyIntegers(1, 4);
  

// for7
// function sumOfSquares(a, b) {
//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//       sum += i * i;
//     }
//     console.log("Kvadratlar yig'indisi: " + sum);
//   }
  
//   // Example usage
//   sumOfSquares(1, 3);

// for8
// function calculateSeriesSum(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += 1 / i;
//     }
//     console.log("S = " + sum);
//   }
  
//   // Example usage
//   calculateSeriesSum(5);
  

// for9
// function calculateProduct(n) {
//     let product = 1;
//     for (let i = 1.1; i <= n; i += 0.1) {
//       product *= i;
//     }
//     console.log("S = " + product);
//   }
  
//   // Example usage
//   calculateProduct(3);
  

// for11
// function calculateSquareSum(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += 2 * i - 1;
//       console.log((2 * i - 1) + "^2 = " + sum);
//     }
//   }
  
//   // Example usage
//   calculateSquareSum(4);
  

// for12
// function calculatePower(a, n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//       result *= a;
//     }
//     console.log(a + "^" + n + " = " + result);
//   }
  
//   // Example usage
//   calculatePower(2, 3);
  

// for13
// function calculatePowers(a, n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//       result *= a;
//       console.log(a + "^" + i + " = " + result);
//     }
//   }
  
//   // Example usage
//   calculatePowers(2, 4);
  

// for14
// function calculateSeriesSum(a, n) {
//     let sum = 1;
//     let term = 1;
//     for (let i = 1; i <= n; i++) {
//       term *= a;
//       sum += term;
//     }
//     console.log("S = " + sum);
//   }
  
//   // Example usage
//   calculateSeriesSum(2, 3);
  

// for15
// function calculateFactorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//       result *= i;
//     }
//     console.log("S = " + result);
//   }
  
//   // Example usage
//   calculateFactorial(4);
  

// for16
// function calculatePowerSum(n, k) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += Math.pow(i, k);
//     }
//     console.log("S = " + sum);
//   }
  
//   // Example usage
//   calculatePowerSum(3, 2);
  

// for17
// function calculatePowerSum(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += Math.pow(i, i);
//     }
//     console.log("S = " + sum);
//   }
  
//   // Example usage
//   calculatePowerSum(3);
  

// for18
// function printIntegers(a, b) {
//     for (let i = a; i <= b; i++) {
//       for (let j = 1; j <= i; j++) {
//         console.log(j);
//       }
//     }
//   }
  
//   // Example usage
//   printIntegers(1, 3);
  

// for19
// function findDivisorsAndSum(n) {
//     let sum = 0;
//     let count = 0;
//     for (let i = 1; i <= n; i++) {
//       if (n % i === 0) {
//         console.log(i);
//         count++;
//         sum += i;
//       }
//     }
//     console.log("Bo'luvchilar soni: " + count);
//     console.log("Bo'luvchilar yig'indisi: " + sum);
//   }
  
//
//   findDivisorsAndSum(12);
  

// for20
// function printPattern(n) {
//     for (let i = 1; i <= n; i++) {
//       let row = "";
//       for (let j = 1; j <= i; j++) {
//         row += j + " ";
//         }
//         console.log(row);
//         }
//     }
        
//         // Example usage
//     printPattern(5);
  

// while1
// function findEmptySegment(a, b) {
//   let emptySegment = "";
//   while (a < b) {
//     emptySegment += a + 1 + " ";
//     a++;
//   }
//   console.log(emptySegment);
// }

// findEmptySegment(2, 7);

// while2
// function findPlacementCount(a, b) {
//     let count = 0;
//     while (a > b) {
//       a -= b;
//       count++;
//     }
//     console.log(count);
//   }
  
//   // Example usage
//   findPlacementCount(10, 3);
  

// while3
// function checkPowerOfThree(n) {
//     let powerOfThree = 1;
//     while (powerOfThree < n) {
//       powerOfThree *= 3;
//     }
//     if (powerOfThree === n) {
//       console.log(n + " - ning darajasi");
//     } else {
//       console.log(n + " - ning darajasi emas");
//     }
//   }
  
//   checkPowerOfThree(81);
  

// while4
// function divideAndRemainder(n, m) {
//     let quotient = 0;
//     let remainder = n;
//     while (remainder >= m) {
//       quotient++;
//       remainder -= m;
//     }
//     console.log("Bo'linish natijasi: " + quotient);
//     console.log("Qoldiq: " + remainder);
//   }
  
//   // Example usage
//   divideAndRemainder(13, 4);
  

// while5
// function divideAndRemainder(n, m) {
//     let quotient = 0;
//     let remainder = n;
//     while (remainder >= m) {
//       quotient++;
//       remainder -= m;
//     }
//     console.log("Bo'linish natijasi: " + quotient);
//     console.log("Qoldiq: " + remainder);
//   }
  
//   // Example usage
//   divideAndRemainder(13, 4);
  

// while6
// function calculateDigitSumAndCount(n) {
//     let sum = 0;
//     let count = 0;
//     while (n > 0) {
//       sum += n % 10;
//       count++;
//       n = Math.floor(n / 10);
//     }
//     console.log("Yig'indi: " + sum);
//     console.log("Raqamlar soni: " + count);
//   }
  
//   // Example usage
//   calculateDigitSumAndCount(12345);
  

// while7
// function checkDigitPresence(n, digit) {
//     let isPresent = false;
//     while (n > 0) {
//       if (n % 10 === digit) {
//         isPresent = true;
//         break;
//       }
//       n = Math.floor(n / 10);
//     }
//     console.log("2 raqami " + (isPresent ? "bor" : "yo'q"));
//   }
  
//   // Example usage
//   checkDigitPresence(12345, 2);
  

// while8
// function checkEvenDigitPresence(n) {
//     let isPresent = false;
//     while (n > 0) {
//       if (n % 2 === 0) {
//         isPresent = true;
//         break;
//       }
//       n = Math.floor(n / 10);
//     }
//     console.log("Toq raqamlar " + (isPresent ? "bor" : "yo'q"));
//   }
  
//   // Example usage
//   checkEvenDigitPresence(12345);
  
// // while 9
// function isPalindrome(n) {
//     let originalNumber = n;
//     let reversed = 0;
//     while (n > 0) {
//     reversed = reversed * 10 + (n % 10);
//     n = Math.floor(n / 10);
//     }
//     return originalNumber === reversed;
//     }
    
//     // Example usage
//     console.log(isPalindrome(1345431)); // true
//     console.log(isPalindrome(45788754)); // false
  

// while 10
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  let divisor = 2;
  while (divisor <= Math.sqrt(n)) {
    if (n % divisor === 0) {
      return false;
    }
    divisor++;
  }
  return true;
}

console.log(isPrime(17)); 
console.log(isPrime(20)); 

