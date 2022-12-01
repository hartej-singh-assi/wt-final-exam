function reverseInt(n){
    n = n +'';
    return n.split('').reverse().join('');
}

console.log(reverseInt(123))