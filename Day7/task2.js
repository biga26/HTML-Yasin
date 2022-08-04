var firstName = prompt("Enter first name");
var lastName = prompt('Enter last name');

function fullName() {
    var full = firstName + ' ' + lastName;
    console.log('My full name is ' + full);
}
fullName();

function color() {
    console.log('Color is red');
}
color();


var num1 = 5;
var num2 = 7;
function addTwoNumbers(){
    console.log(num1 + num2);
}
addTwoNumbers();

function timesTwo(num){
    console.log(num * 2);
}
timesTwo(5);

function multiplyTwoNumbers(num1, num2){
    console.log('Result is ' + num1 * num2);
}
multiplyTwoNumbers(4, 5);

function name(first, last){
    console.log(first + last);
}
name('Begench', 'Aman');


function welcome(name = 'guest'){
    console.log('Hello ' + name);
}
welcome();
welcome('Begench');

function showNum(){
    return 8;
}
showNum();//empty
console.log(showNum());
console.log(showNum() + 5);

function sum(){
    return 5 + 7;
    var result = 3 + 2;//this line will be skipped because there is return
}
console.log(sum());

function sayName(){
    var myName = 'Jonathan';
    //return myName;
    return 'My name is ' + myName;
}
console.log(sayName());

function minusSeven(){
    var num = 11;
    return num - 7;
}
console.log(minusSeven());

function compare(myNum){
    var num = 8;
    if(myNum > num){
        return 'My num is bigger than num';
    }else if(myNum < num){
        return 'My num is smaller than num';
    }else{
        return 'My num is equal to num';
    }
}
console.log(compare(7));