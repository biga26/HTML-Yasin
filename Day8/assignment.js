var watchedList = ['Suits', 'Moon Knight', 'Boys'];
alert(watchedList);
watchedList.push('Benji');
console.log(watchedList);


function updateList(name){

    return watchedList.push(name);

}

console.log(updateList('Ben'));
