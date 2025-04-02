// functions

// function declaration

function prac(num1,num2) {
  return num1 + num2
}
console.log(prac(4, 5))
console.log(isNaN("4"))
console.log(typeof NaN)


// arrow function
const isEven = (num) =>{
  return num % 2 === 0
}

console.log(isEven(14))

const arr = [1, 3, 4, 5, 7];
const target = 1;

// function expression
const check = function(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === target) return i
  }
  return -1
}

console.log(check(arr, target))


const addAll = function(...nums) {
  let sum = 0;
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum
}

console.log(addAll(1,3,4,5,7))

const person = {
  age: 31,
  hobbies: ["dance", "acting"],
}


function checking({age}) {
  console.log(age)
}

checking(person)

// both of them together higher order function
// function returning function

function test1() {
  return function() {
    return "testing the function returning function"
  }
}
console.log(test1()())
//calback function
function one(check) {
  return `Happy ${check}`
}
function test13(callback) {
  console.log(callback("meal"))
  return "Here"
}
console.log(test13(one))