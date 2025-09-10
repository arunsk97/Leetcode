function fibonacci(num){
    let numArr = [0,1];

    for(let n = 2; n < num; n++){
        numArr.push(numArr[n-1] + numArr[n-2]);
    } 

    return numArr
}

console.log(fibonacci(50))