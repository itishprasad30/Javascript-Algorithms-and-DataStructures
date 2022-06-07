// formula  Fn = Fn-1 + Fn-2

function fibonacci(n: number): number {
  const memorize = {};

  function helper(n: number): number {
    if (n == 0) return 0;
    if (n in memorize) return memorize[n];
    if (n < 3) return 1;
    return (memorize[n] = helper(n - 1) + helper(n - 2));
  }

  return helper(n);
}

console.log(fibonacci(19)); // 4181



// sorter way
const fibonacciSort = (n: number, memo: number[] = [0, 1, 1]) =>
  memo[n]
    ? memo[n]
    : (memo[n] = fibonacciSort(n - 1, memo) + fibonacciSort(n - 2, memo)) && memo[n];

console.log(fibonacciSort(19)); // 4181
