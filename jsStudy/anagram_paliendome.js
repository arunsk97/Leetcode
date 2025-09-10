let word = 'MAlayalam'

console.log(word.toLowerCase().split('').reverse().join('') == word.toLowerCase())

//--------------------------------------
function isPalindrome(str) {
    str = str.toLowerCase();
    let left = 0, right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome('MAlayalam')); // true
console.log(isPalindrome('JavaScript')); // false
