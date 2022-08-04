const myComputer = {
    brand: 'Asus',
    ram: 8,
    screenSize: 17,
    isNew: true,
    startWork: function(){
        console.log('Computer is ON');
    },
    sayHello: function(name){
        console.log('Hi ' + name);
    },
    info: function(){
        console.log('This is ' + myComputer.brand + '. Price is:' + myComputer.price + '. New:'+myComputer.isNew);
    }
}
myComputer.price = 800;
myComputer.isNew = false;

myComputer.info();
myComputer.startWork();
myComputer.sayHello('Benji');
console.log(myComputer.brand);
console.log(myComputer['ram']);
console.log(myComputer);