const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 30 }
];

function GroupObj(obj,prop){
    return obj.reduce((acc,n)=>{
        if(!acc[n[prop]]) acc[n[prop]] = [];
        acc[n[prop]].push(n);
        return acc;
    },{})
}

console.log(GroupObj(people, 'age'))