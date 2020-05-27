async function test() {
    async function functionOne() {
        return new Promise((resolve)=>{
            resolve(1)
        });
    }

    return await functionOne();
}
async function test2() {
    async function functionOne() {
        return 1;
    }

    return await functionOne();
}
test().then(console.log.bind(console));
test2().then(console.log.bind(console));
