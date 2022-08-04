//declare function
function test1(num1, num2){
    // code goes here
    return num1 + num2;    
}
//call declared function
console.log(test1(1,2));

//express a function
var test2 = function(num1, num2){
    return num1 + num2;
    //code goes here
}
//call expresion function
console.log(test2(2, 3));

//arrow function
var test3 = (num1, num2) =>{
    //code goes here
    return num1 + num2;
}
console.log(test3(3, 4));
