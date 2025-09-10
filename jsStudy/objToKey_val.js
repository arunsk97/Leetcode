//Convert an object into an array of key-value pairs.

const obj5 = {};
console.log(keyValPair(obj5))
// Convert obj5 into an array of key-value pairs
const obj4 = { user: { name: "Bob" }, score: 50, passed: false };
console.log(keyValPair(obj4))
// Convert obj4 into an array of key-value pairs
const obj3 = { id: 101, active: true, role: "admin" };
console.log(keyValPair(obj3))
// Convert obj3 into an array of key-value pairs
 const obj2 = { a: 1, b: 2, c: 3 };
 console.log(keyValPair(obj2))
// Convert obj2 into an array of key-value pairs
const obj1 = { name: "Alice", age: 25, city: "London" };
console.log(keyValPair(obj1))
// Convert obj1 into an array of key-value pairs

function keyValPair(obj){
    let a = [];

    for(let key in obj){
        if(obj[key] && typeof obj[key] == 'object'){
            a.push([key, keyValPair(obj[key])])
        }else{
            a.push([key, obj[key]]);
        }
    }

    return a
}

//----------------------------object method

console.log(keyValPairObj(obj1));
console.log(keyValPairObj(obj2));
console.log(keyValPairObj(obj3));
console.log(keyValPairObj(obj4));
console.log(keyValPairObj(obj5));

function keyValPairObj(obj){
    let a = []
    for(let [key, val] of Object.entries(obj)){
        if(val && typeof val == 'object'){
            a.push([key, keyValPairObj(val)])
        }else{
            a.push([key, val])
        }
    }

    return a
}