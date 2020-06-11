let verify = (str) => {
    let a = 0, b = 0, c = 0, last = [];

    for (let __ = 0; __ < str.length; __++) {
        let _ = str[__];

        if (_ == '(') {
            a++;
            last.push(')');
        }
        if (_ == ')') {
            if (!a) return 0;
            if (last[last.length - 1] != ')') return 0;
            a--;
            last.pop();
        }
        if (_ == '[') {
            last.push(']');
            b++;
        }
        if (_ == ']') {
            if (!b) return 0;
            if (last[last.length - 1] != ']') return 0;
            last.pop()
            b--;
        }

        if (_ == '<') {
            last.push('>');
            c++;
        }
        if (_ == '>') {
            if (!c) return 0;
            if (last[last.length - 1] != '>') return 0;
            last.pop();
            c--;
        }
    }
    return Number(a === 0 && b === 0 && c === 0).toFixed();
}
console.log('verify("---(++++)----")-> 1', verify("---(++++)----"));
console.log('verify("") -> 1', verify(""));
console.log('verify("before ( middle []) after ") -> 1', verify("before ( middle []) after "));
console.log('verify(") (") -> 0', verify(") ("));
console.log('verify("<(   >)") -> 0', verify("<(   >)"));
console.log('verify("(  [  <>  ()  ]  <>  )") -> 1', verify("(  [  <>  ()  ]  <>  )"));
console.log('verify("   (      [)") -> 0', verify("   (      [)"));

