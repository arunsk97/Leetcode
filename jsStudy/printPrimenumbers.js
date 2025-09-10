function getPrimes(limit) {
    let primes = [];

    for (let n = 2; n <= limit; n++) {
        if (n === 2 || n === 3) {
            primes.push(n);
            continue;
        }

        if (n % 2 === 0 || n % 3 === 0) continue;

        let isPrime = true;

        for (let m = 5; m * m <= n; m += 6) {
            if (n % m === 0 || n % (m + 2) === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) primes.push(n);
    }

    return primes;
}

// Example
console.log(getPrimes(100));

