function sumUpTo(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}

const t1 = performance.now();
console.log('t1 is', t1);
sumUpTo(10000000000);
const t2 = performance.now();
console.log(`Time required : ${(t2 - t1) / 1000} seconds`);