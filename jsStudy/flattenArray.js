const nested = [1, [2, [3, [4]]]];

function arrReduce(arr){
    return arr.reduce((acc,n)=>{
        if(Array.isArray(n)){
           return acc.concat(arrReduce(n));
        }else{
           return acc.concat(n);
        }
    },[])
}

console.log(arrReduce(nested))

const arr1 = [1, [2, 3], [4, [5, 6]]];
console.log(arrReduce(arr1))

// deeper nesting
const arr2 = [[[[1]]], 2, [3, [4, [5, [6]]]]];
console.log(arrReduce(arr2))

// mix of numbers and strings
const arr3 = [1, ["a", ["b", ["c"]]], [2, 3]];
console.log(arrReduce(arr3))

// empty arrays inside
const arr4 = [[], [1, [2, []]], 3];
console.log(arrReduce(arr4))

// uneven nesting
const arr5 = [1, [2, [3, [4, [5]]]], 6, [[7, 8]], 9];
console.log(arrReduce(arr5))

// mixed types
const arr6 = [1, [true, [false, [null]]], ["x", ["y"]]];
console.log(arrReduce(arr6))