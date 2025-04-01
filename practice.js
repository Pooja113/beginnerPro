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
