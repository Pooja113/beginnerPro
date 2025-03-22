// Shallow Copy

const obj1 = {
  name: "Pooja Paul",
  address: { city: "Shimla" }
};
const obj2 = { ...obj1 }
// const obj2 = Object.assign({}, obj1)

obj2.address.city = "Bangalore"
console.log(obj2.address.city)
console.log(obj1.address.city)



// Deep Copy

const newObj1 = {
  name: "Pooja Paul",
  address: { city: "Shimla" }
};
const newObj2 = JSON.parse(JSON.stringify(newObj1))

newObj2.address.city = "Bangalore"
console.log(newObj2.address.city)
console.log(newObj1.address.city )
