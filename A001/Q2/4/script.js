let age = prompt('Enter age of the person');
let exp = prompt("Enter the experience of the person");

if (exp>0 && age>=35){
    alert("The salary is 6000.");
}
else if(exp>0 && (age>=28 && age<35)){
    alert(4800);
}
else if(exp>0 && age<=28){
    alert(2000);
}
else{
    alert(0);
}