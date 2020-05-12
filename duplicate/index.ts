export function duplicateCount(text: string): number {
    const letters = text.toLowerCase().split('');
    const a = [...new Set<string>(letters)];
    if(a.length === letters.length) return 0;
    return a.reduce<number>((agg, c)=>{
        if(letters.indexOf(c) !== letters.lastIndexOf(c)){
            agg++;
        }
        return agg;
    }, 0);
}

console.log(duplicateCount('ABBA'));
console.log(duplicateCount('indivisibility'));
console.log(duplicateCount('Indivisibilities'));
console.log(duplicateCount('abcde'));
console.log(duplicateCount('aA11'));
