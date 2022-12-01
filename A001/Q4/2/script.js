function capitalizeLetters(str){
    array1 = str.split('')
    newarray = []
    for(let i = 0 ;i<array1.length ; i++){
        newarray.push(array1[i].charAt[0].toUpperCase() + array1[i].slice(1));
    }
    return newarray.join('');
}

console.log(capitalizeLetters('i love javascript'));