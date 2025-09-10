//Find the most frequent element in an array.

console.log(mostFreq([1, 3, 2, 3, 4, 3, 2, 2, 2])); 
// 2

console.log(mostFreq(["apple", "banana", "apple", "orange", "banana", "apple"])); 
// "apple"

console.log(mostFreq([true, false, true, "yes", "yes", "yes", false])); 
// "yes"

console.log(mostFreq([1, [2, 2], [3, [2, 3]], 3])); 
// [2, 3]

console.log(mostFreq([7, 8, 7, 8, 9])); 

console.log(mostFreq([1, 2, 3, 4]))
// [7, 8]

function mostFreq(arr){
    let arr1 = flatten(arr)
    return arr1.reduce((acc,n)=>{
        acc[n] = (acc[n] || 0) + 1
        if(acc[n] > acc.most){
            acc.most = acc[n];
            acc.found = []
            acc.found.push(n);
        }else if(acc.most == acc[n]){
            acc.found.push(n)
        }
        return acc
    }, {most:0,found: []}).found
}

function flatten(arr){
    return arr.reduce((acc,n)=>{
        if(Array.isArray(n)){
            return acc.concat(flatten(n))
        }else{
            return acc.concat(n)
        }
    },[])
}

function mostFreqMap(arr) {
    const flat = flatten(arr);
    const freqMap = new Map();
    let maxCount = 0;

    for (const item of flat) {
        const count = (freqMap.get(item) || 0) + 1;
        freqMap.set(item, count);
        if (count > maxCount) maxCount = count;
    }

    const result = [...freqMap.entries()]
        .filter(([_, count]) => count === maxCount)
        .map(([item]) => item);

    return result.length === 1 ? result[0] : result;
}