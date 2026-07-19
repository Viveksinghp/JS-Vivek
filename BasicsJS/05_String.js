const name='Vivek'
const repoCount=50


console.log(name +" "+ repoCount+" " +"value");  // old way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Vivek')
console.log(gameName[0]);
console.log(gameName._proto_);


//console.log(gameName.length);


console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString= gameName.substring(0,3)
console.log(newString);


const anotherString=gameName.slice(-5,3)
console.log(anotherString);

const newStringOne = "    vivek    "
console.log(newStringOne);
console.log(newStringOne.trim());

const  url="https://vivek.com/vivek%90" 
console.log(url.replace('%90','-'))

console.log(url.includes('sundar'))
