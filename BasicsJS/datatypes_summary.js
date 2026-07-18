// Primitive


// 7 Types : String, Number, Boolean, null , undefined, Symbole, BigInt

const score=100
const scoreValue=100.3

const isLoggedIn= false
const outsideTemp=null
let userEmail;

const id = Symbol('123')
const nextid=Symbol('123')

console.log(id===nextid)


const bigNumber=4656545645646556n


//Reference (Non Primitive)


//Array, Object, Function

const heros =["shaktiman", "naagraj","doga"];
let myobj={
    name:"vivek",
    age:22,
}

const myfunction= function(){
    console.log("Hello world")
}

console.log(typeof heros)