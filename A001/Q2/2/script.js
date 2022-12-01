let numbers = [1,2,4,7,19];
// let numbers = [1,2,3,4,5];
// let numbers = [1,6,10,18,2,4,20];
// let numbers = [9,8,7,6,5,4,3,2,1];

numbers.sort((a,b)=>{
    if (a>b){
        return 1;
    }
    if (a<b){
        return -1;
    }
    return 0;

});

function isAscOrder(numbers){
    for(let i = 0; i <= numbers.length; i++){
        if(this.numbers[i]==numbers[i]){
            return true;
        }
    }
    return false;
}


console.log(inAscOrder(numbers1))