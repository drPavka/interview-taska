const factorial = (n: number): number => (n !== 1)?(n * factorial(n - 1)):n;

console.log(factorial(6));
