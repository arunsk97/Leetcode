class Stack{
    constructor() {
        this.stack = [];
    }
    
    push(item) {
        this.stack.push(item);
    }
    
    pop() {
        return this.stack.pop();
    }
    
    peek() {
        return this.stack[this.stack.length - 1];
    }
    
    isEmpty() {
        return this.stack.length === 0;
    }
}

function isBalanced(expression) {
    const stack = new Stack();
    const openingBrackets = '({[';
    const closingBrackets = ')}]'; 
    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let char of expression) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            if (stack.isEmpty() || stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        }
    }
    return stack.isEmpty();
}

// Example usage:
console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("{[(])}")); // false
console.log(isBalanced("{{[[(())]]}}")); // true    
console.log(isBalanced("((())")); // false
console.log(isBalanced("())")); // false
console.log(isBalanced("")); // true
console.log(isBalanced("abc(def[ghi]{jkl})")); // true
console.log(isBalanced("abc(def[ghi{jkl})]")); // false
