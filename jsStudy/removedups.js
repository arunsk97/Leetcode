const arr =[2, 5, 1, 2, 3, 5, 1]

let val = arr.reduce((acc,n)=>{
  acc[n]= (acc[n] || 0) + 1;
  if(acc[n] == 2 && !acc['found']){
    acc['found'] = n
  }
  return acc
},{}).found

console.log(val)