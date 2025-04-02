const newArr = new Array(7).fill(0);
console.log(newArr)

const name = "      Pooja      "
// const newName = name.trim()
// const newName= name.trim().toUpperCase()
// const newName= name.toLowerCase()
const newName= name.trim().slice(1) // start index till end index - 1


const num = 18
console.log(typeof String(num))
console.log(typeof Number(num)) 
console.log(newName)
console.log(typeof null)
console.log(typeof undefined)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)


// Falsy Values
//undefined, null, 0 , false, ""
const fName= ""
if(fName) {
  console.log(`fName is ${fName}`)
}
else {
  console.log("Checking the falsy values")
}


//ternary operator
const age = 15
const check = age >= 31 ? "yoga" : "exercise";
console.log(check)

const day = 4;
switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;   
  default:
    console.log("Days after wednesday");
}

const calToNum = 11;
let i = 0;
let add = 0;
while(i <= calToNum) {  
  add += i
  i++
}
console.log(add)


//break and continue
for(let i = 0; i <= 10; i++){
  if(i == 3) continue;
  else if(i == 8) break;
  console.log(i)
}


const pracArr = ["a", "b", "c"];
for(const prac of pracArr) {
  console.log(prac)
}
for(const i in pracArr) {
  console.log(pracArr[i])
}

const [val1, ...val3] = pracArr
console.log(val1, val3)
console.log(Array.isArray(pracArr))
  