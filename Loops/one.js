//FOR LOOPS
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element)
    
// }
// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer Loop value: ${i}`);
//     for(let j=0; j<=10; j++ ){
// console.log(`Outer Loop Value:${j}`);
//     }
    
// }
 let array =["Mango" ,"Apple","Banana","Grapes","Papaya"]
 console.log(array.length)
 for (let index = 0; index < array.length; index++) {
    const element = array[index];
   // console.log(element)
    
 }


 // break and Continue

 for (let index =1; index <=20; index++) {
    if(index==5){
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${index}`);
    }
 for (let index =1; index <=20; index++) {
    if(index==5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
    }