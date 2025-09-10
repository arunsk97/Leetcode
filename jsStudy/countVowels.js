let word = 'Javasript'
let vowels = ['a','e', 'i','o','u']

console.log(word.split('').reduce((acc,n)=>{
    if(vowels.includes(n)){
        acc +=1
    }
    return acc
},0))

//let word = 'Javasript';
let count = (word.match(/[aeiou]/gi) || []);
console.log(count); // 3