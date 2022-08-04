const instagramUser = {
    user: 'Begench',
    userName: 'biga',
    lastName: 'Amanmyradov',
    followers: ['John', 'Jim', 'Alex'],
    age: 30,
    isAdult: true,
    myAge: function(){
        console.log('My age is ' + instagramUser.age);
    }
}
instagramUser.email = 'dasda@gmail.com';
instagramUser.country = 'USA';
instagramUser.myAge();
console.log(instagramUser);

