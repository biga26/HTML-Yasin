var myFavSport = function(sport){
    return 'My fav sport is ' + sport;
}
console.log(myFavSport('gym'));


//expression
var rectangleArea = function(height, width){
    return 'Rectangle area is ' + height * width;
}
console.log(rectangleArea(4,7));

//fata arrow wunction
var findSquare = (num) =>{
    return 'Square of ' + num + ' is ' + num * num;
}
console.log(findSquare(5));

var triangleArea1 = (height, width, length) =>{
    return height * width * length;
}

var triangleArea2 = function(height, width, length){
    return height * width * length;
}

function triangleArea3 (height,width,length){
    return height * width * length;
}