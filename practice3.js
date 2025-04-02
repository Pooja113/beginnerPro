// Objects

const key = "name"

const person = {
  age: 31,
  hobbies: ["dance", "acting"],
}
person[key]="Chris"
person.gender = "male";
console.log(person)

for (const key in person) {
    console.log(person[key]);
}

console.log(Array.isArray(Object.keys(person)))


const key1 = "address"
const value = "Shimla"

const newObj = {
  [key1]: value
}
console.log(newObj)