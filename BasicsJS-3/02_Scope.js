let a=300
{
let a=10
const b=20
var c=30
}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    username="vivek"

    function two(){
        const website = "youtube"
        console.log(username);

    }
    // console.log(website); // error
    two()
}
//one()

if(true){
    const username = "vivek"
    if (username === "vivek"){
      //  console.log(username + websites)
    }
}


//++++++++++++++++++++ INTRESTING +++++++++++++++++++++++
console.log(addone(5))
function addone(num){
    return num + 1
}
//console.log(addtwo(6))
const addtwo = function(num){
    return num + 2
}
console.log(addtwo(6))

