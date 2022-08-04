var someNumbers = [1, 2, 3, 4, 5, 6];

for(var i=0; i<someNumbers.length; i++){
    var num = someNumbers[i];
    console.log(num*num);
}


var counter = 0;
while(counter<5){
    console.log('hi');
    counter++;
}

const seasons = ['Winter', ' Summer', 'Autum', 'Fall'];

let z = 0;
while(z<seasons.length){
    console.log(seasons[z]);
    z++;
}

let letterGuess = prompt('Guess a letter:');

let myLetter = 't';

while(letterGuess != myLetter){
    alert('Wrong! Guess another letter');
    letterGuess = prompt('Guess a letter:')
}

alert('Congrats');

