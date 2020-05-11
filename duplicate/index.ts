type T = { [k: string]: number };

export function duplicateCount(text: string): number {
    let result = 0;
    const letters = text.toLowerCase().split('');
    let s = letters.reduce<{ [k: string]: number }>((a, s: string) => {
        a[s] = (a[s]) ? a[s] + 1 : 1;
        return a;
    }, {});

    for (const property in s) {
        if (s[property] > 1) result++;
    }
    return result;
}

console.log(duplicateCount('ABBA'));
console.log(duplicateCount('Indivisibilities'));
console.log(duplicateCount('abcde'));
