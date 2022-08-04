function myFavFood(food){
    return 'My fav food is ' + food;
}
console.log(myFavFood('Pizza'));

function rectangleArea(height, width){
    return 'Rectangle area is ' + height * width;
}
console.log(rectangleArea(4, 2));

var myCountry = function (){
    return 'I live in USA'
}
console.log(myCountry());

var myCity = function (city){
    return 'I live in ' + city;
}
console.log(myCity('Brooklyn'));

// declaration a functon
function myCity1(city){
    return 'I live in '+ city;
}
// expression
var result1= function (city){
    return 'I live in '+city;
}
console.log(result1('Atlanta'));
