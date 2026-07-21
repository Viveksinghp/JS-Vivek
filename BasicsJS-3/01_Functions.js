//Funvtions
// function sayMyName(){
//     console.log("V")
//     console.log("I")
//     console.log("V")
//     console.log("E")
//     console.log("K")
// }
//sayMyName()

function addtwonums(num1,num2){
    //console.log(num1 + num2)
    // let result = num1 + num2
    // return result

    return num1 + num2
}
const result =addtwonums(5,9)
//console.log("Result:",result);


function loginUsermessage(username){
    if(username===undefined){
      console.log("Please Enter a user name");
      return 

    }
    return `${username} just logged in`
}
// console.log(loginUsermessage("Vivek"))
// console.log(loginUsermessage())


function calculateCartPrice(...num1){
return num1
}
// console.log(calculateCartPrice(400,550,55,620))

const user ={
    username: "Vivek",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

const myNewArray = [200,520,66,555]

function returnsecondvalue(getarray){
    return getarray[1]
}

console.log(returnsecondvalue(myNewArray))