const arr = [1, 3, 4, 5, 7]
arr.fill(0, 1, 3)

//splice
arr.splice(arr.length,1, 8)

const test=[]
arr.forEach(ele => {
 test.push(ele*2)
});

console.log(test)
//map returns array
const mapPrac=arr.map((el) =>el*3)
console.log(mapPrac)

const users = [
  {
  username: "Captain", lastname: "America", age: 54
  },
  {
    username: "Iron", lastname: "Man", age:35
  }
]
const usernames = users.map((el) => el.username)
console.log(usernames)

//filter
const filterPrac = arr.filter((num) => num > 5);
console.log(filterPrac)


//reduce
const ageAdd = users.reduce((initAge, initVal) => {
  return initAge + initVal.age
},0)
console.log(ageAdd)

//sort
const lowToHigh = users.sort((a, b) => {
  return a.age-b.age
})
console.log(lowToHigh)

//find
const findPrac = users.find((user) => user.age === 35)
console.log(findPrac)

//every
const everyPrac = users.every((user) => user.age > 51)
console.log(everyPrac)

//some
const somePrac = users.some((user) => user.age > 51)
console.log(somePrac)

