'use strict';

function reverse(arr) {
    const l = arr.length;
    let _l;
    if (l && l > 1) {
        let i = 0;
        do {
            let _ = arr[_l = l - 1 - i];
            arr[_l] = arr[i];
            arr[i++] = _;
        } while (i < _l)

    }
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

reverse(a);

console.log(a);
