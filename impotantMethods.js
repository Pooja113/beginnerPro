const aboutFn= function(about) {
  console.log(this.name, about)
}
const person = {
  name: "Chris",
  about: aboutFn
}
 
person.about("here")


//call
const person1 = {
  name: "Thor",
}
aboutFn.call(person1, "God of thunder")


// apply
const person2 = {
  name: "Loki",
}
aboutFn.apply(person2, ["God of multiverse"])

//bind
const person3 = {
  name: "Helen",
}

const bindPrac = aboutFn.bind(person3, "Goddess of hell")
bindPrac()



// proto and Object.create
const fns = {
  about: function() {
    console.log("this is the about function")
  },
  checkParams: function() {
    console.log(`this is to check params ${this.fname}`)
  }
}

function users(fname,lname,age) {
  const user = Object.create(fns);
  user.fname = fname;
  user.lname = lname;
  user.age = age;

  return user
}

const user1 = users("Iron", "Man", 34)
user1.about()
user1.checkParams()

console.log(user1)

//prototype

function newUser(fname,lname,age) {
  const user = Object.create(newUser.prototype);
  user.fname = fname;
  user.lname = lname;
  user.age = age;

  return user
}
newUser.prototype.about = function() {
  console.log("This is the protoType")
}
const userProtoCheck = newUser("Black", "Widow", 31);
userProtoCheck.about()


//new keyword
function NewWordCheck(fname,lname,age) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
}
NewWordCheck.prototype.about = function() {
  console.log("This is the new word prototype")
}
const userNewWordCheck = new NewWordCheck("Black", "Widow", 31);
userNewWordCheck.about()

for (const key in userNewWordCheck) {
  if (userNewWordCheck.hasOwnProperty(key)) {
    console.log(key)
  }
}

const arr = [1, 3, 4];
console.log(Object.getPrototypeOf(arr))


// Class
class Animal {
  constructor(name, age) {
    this.name = name
    this.age= age
  }
  about() {
    console.log(`The name of the animal is ${this.name}`)
  }
  
}

class Dog extends Animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }
  static directCall=" Staic property"
  aboutDog() {
    console.log(`${this.name}'s speed is ${this.speed}km/h`)
  }
  get nameAge() {
    console.log(`${this.name}, ${this.age}`)
  }

  set nameAge(nameAge) {
    const [name, age] = nameAge.split(" ")
    this.name = name
    this.age = +age
  }
}
const an1 = new Animal("Tiger", 5);
an1.about()

const an2 = new Dog("Sheru", 4, 11)
an2.aboutDog()
an2.nameAge
an2.nameAge = "Tommy 4"
console.log(an2)

console.log(Dog.directCall)



