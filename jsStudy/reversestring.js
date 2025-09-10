let word = 'Javascript';
var reverse = '';

for(let l = word.length - 1; l >= 0; l--){
    reverse = reverse + word[l];
}

console.log(reverse)