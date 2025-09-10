let num = 11;
let isPrime = true;

if (num < 2) {
    isPrime = false;
} else if (num === 2 || num === 3) {
    isPrime = true;
} else if (num % 2 === 0 || num % 3 === 0) {
    isPrime = false;
} else {
    for (let n = 5; n * n <= num; n += 6) {
        if (num % n === 0 || num % (n + 2) === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime ? `${num} is prime` : `${num} is not prime`);

