export function findOutlier(integers: number[]): number {
    const absModulus = (_: number): number => Math.abs(_) % 2;

    const containsEven: boolean = integers.slice(0, 3).reduce((a, _) => {
        a = a + absModulus(_);
        return a;
    }, 0) < 2;

    const result = integers.find((_) => {
        const __ = absModulus(_);
        return (containsEven) ? __ > 0 : __ === 0;
    });

    return result || 0;
}

try {
    console.log(
        findOutlier([0, 1, 2]),
        findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]),
        findOutlier([160, 3, 1719, 19, 11, 13, -21]),
        findOutlier([-74897806, -152756650, -162139478, 8874242, -70272961, -15903968, -116762314, -23482482, 23667600, 182560006, -141634166, 145312326, -92316604, 161118484, -39045178, 130108532, -176523408, -23543744, 65552418, -186796580, 191859740, 67436564, 18643742, -93127280, 143537898, 2584070, 187353836, 97776880, 164252204, -92970366, 36065448, -198183678, -185279352, 103464806, 28129154, 28148212, -13845564, 17110510, -112734896, -28032650, -25861852, 13050722, -168580866])
    );
} catch (e) {
    console.error(e)
}
