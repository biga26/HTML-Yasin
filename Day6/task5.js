var num = Math.random()*100;

if(num < 10){
    console.log(num + " is smaller than 10");
}else if(num > 10){
    console.log(num + ' is bigger than 10');
}else{
    console.log(num + " is equal to 10 ");
}



console.log('==================================================');

var num2 = -5;

if(num2 > 0){
    console.log('Positive number = ' + num2);
}else if(num2 < 0){
    console.log('Negative number = ' + num2);
}else{
    console.log(num2 + " equals to 0");
}



console.log('==================================================');

console.log(5 === 5); //true
console.log(5 === '5'); // false
console.log(5 !== 5); //false
console.log(5 !== '5'); //true
