// // if statements

// if (2=="2") {
//    // console.log("Executed")
// }
// // <, > , <= , >= , == , != ,=== !==

// const temp =40;
// if(temp ===40){
//     console.log("Less than 50")
// }
// else {
//     console.log("Temp is Greater than 50");
// }

// const score = 200 
// if (score > 100){
//     const power = "fly"
//     console.log(`User power:${power}`);
// }
// //console.log(`User power:${power}`); not defined

// const balance =10000
// if(balance > 500) console.log("test")

const userloggedIn = true
const debitCard = true
const loggedInFromEmail =true
const loggedInGoogle = false

if(userloggedIn && debitCard ){
    console.log("Allow to Buy Course");

    if(loggedInGoogle || loggedInFromEmail){
        console.log("User logged In")
    }
}