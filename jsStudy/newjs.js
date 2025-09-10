const words = ["Apple", "apple", "Banana", "APPLE"];
const val = words.reduce((acc, n)=>{
 n = n.toLocaleLowerCase()
 acc[n] = (acc[n] || 0) + 1
 return acc
},{})

console.log(val);


//---------------------------------------

const arr = [{ id: 1, name: "Arun" }, { id: 2, name: "Maya" }];

const val1 = arr.reduce((acc,n)=>{
    let a = Object.keys(n)
    acc[n[a[0]]] = n[a[1]];
    return acc;
}, {})

console.log(val1)

////--------------------------------------

const arr1 = [1, 3, 2, 3, 4, 3, 2, 2, 2]

let most1 = arr1.reduce((acc, n)=>{
    acc[n] = (acc[n] || 0) + 1
    if(acc[n] > acc['most'] ){
        acc['most'] = acc[n];
        acc['found'] = n;
    }
    return acc;
},{'most': 0}).found
console.log(most1)
