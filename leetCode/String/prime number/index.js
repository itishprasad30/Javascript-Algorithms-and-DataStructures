//check number is prime or not

function isPrime(n) {
  if (n == 1) {
    return `${n} is not a prime or composite `;
  }

  for (var i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}
console.log(isPrime(12));
