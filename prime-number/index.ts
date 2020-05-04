const prime_number = (n: number): boolean => {
    if (n === 1) return true;
    for (let x = 2; x < n; x++) {
        if (!(n % x)) {
            return false;
        }
    }
    return true;
}

console.log(prime_number(14));
