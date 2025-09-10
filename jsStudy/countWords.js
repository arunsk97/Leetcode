//Count word frequency in a sentence and store it in an object.

function wordFreq(arr){
    return arr.reduce((acc,n)=>{
        acc[n.toLowerCase()] = (acc[n.toLowerCase()] || 0) + 1;
        return acc;
    },{})
}

const word = "Javascript"

console.log(wordFreq(word.split('')))