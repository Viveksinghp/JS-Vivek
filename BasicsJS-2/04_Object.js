//Singleton
//const tinderUser = new Object() // singlton object

// non Singlton Object
const tinderuse ={}
tinderuse.id= "25565sf"
tinderuse.name="Vivek"
tinderuse.isLoggedIn=false

//console.log(tinderuse)


const reguser ={
    email: "vivelk@gmail.com",
    fullname:{
        username:{

        firstname: "Vivek",
        lastname: "Singh"
      }
    }
}
//console.log(reguser.fullname)
const obj1= {1:"a", 2: "b"}
const obj2={3: "a" ,4: "b"}

//const obj3 = Object.assign({},obj1,obj2)

const obj3={...obj1, ...obj2}
console.log(obj3);



const users =[

]
console.log(Object.keys(tinderuse));
//console.log(tinderuse)


console.log(tinderuse.hasOwnProperty('isLoggedIn'));



