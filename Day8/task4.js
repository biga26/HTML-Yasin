const numbers = [1,2,3,4];
alert(numbers);
numbers.push(5,6,7); // add new element to the end of list
alert(numbers);

numbers.pop(); // removes the last element
alert(numbers);

console.log(numbers.join());
console.log(numbers.join(' '));
console.log(numbers.join('-'));

const numbers2 = [8,9,10];
const mixed = numbers.concat(numbers2);
console.log(mixed);