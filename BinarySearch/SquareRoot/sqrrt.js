/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) {
        return x;
    }
    return findsqrt(x, 0, x);
};

// The recursive helper function
var findsqrt = function(x, low, high) {
    // Base Case: When low > high, the search space is exhausted.
    // The 'low' pointer now points to the first number whose square is > x.
    // The answer is therefore the number just before it, which is 'high'.
    if (low > high) {
        return high;
    }

    let mid = low + Math.floor((high - low) / 2);
    // Use BigInt to prevent integer overflow for large 'x'
    const sqr = BigInt(mid) * BigInt(mid);
    const bigX = BigInt(x);
    
    if (sqr === bigX) {
        return mid;
    } else if (sqr > bigX) {
        // Target is in the lower half.
        return findsqrt(x, low, mid - 1);
    } else { // sqr < bigX
        // Target is in the upper half.
        return findsqrt(x, mid + 1, high);
    }
};