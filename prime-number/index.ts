const isPrime = (n: number): boolean => {
    if (n === 2) return true;
    if (n < 2 || n % 2 === 0) return false;

    for (let x = 3; x <= Math.sqrt(n); x += 2) {
        if (n % x == 0) return false;
    }
    return true;
}




console.log(
    isPrime(5099)
    //isPrime(29)
);
