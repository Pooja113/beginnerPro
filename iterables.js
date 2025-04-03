//Sets
// Unique values
const setPrac = new Set();
setPrac.add(1);
setPrac.add(1);
setPrac.add(2);
setPrac.add(["a", "b"]);
console.log(setPrac) 

if (setPrac.has(1)) console.log("present")

for (const element of setPrac) {
 console.log(element) 
}

// Map
const per= { name: "Chris" }
const mapPrac = new Map();
mapPrac.set(1,"test")
const check = mapPrac.set(per, { age: 54 })
console.log(mapPrac.keys())
console.log(check.get(per).age)

for (const [key,value] of mapPrac) {
  console.log(key, value)
}

