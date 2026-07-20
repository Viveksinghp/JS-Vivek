//Singleton

//const { jsx } = require("react/jsx-runtime");

//Object literal

const mysym=Symbol("key1");

const Jsuser={
    name:"Vivek",
    age:16,
    [mysym]:"mykeyr",
    locatiom: "New delhi",
    email:"viveksingh2k04@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]

}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser[mysym])


Jsuser.email ="viveksinghglv@gamil.com"
//Object.freeze(Jsuser)
Jsuser.email ="viveksingh@chagpt.com"
console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hellow Js User");
}

Jsuser.greetingTwo=function(){
    console.log(`Hello JS User,${this.name}`);
}


console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());