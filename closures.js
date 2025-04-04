function outerFun(firstname, lastname) {
  const role = "Captain America"
  return function innerFun() {
    console.log(firstname, lastname, role)
  }
}

const res = outerFun("chris", "evans")
res()


// example

function cal(num) {
  return function(num2) {
    return num2**num
  }   
}
const calShort = power => number => number ** power;

const respose = cal(2);
console.log(respose(3))

const resposeshort = calShort(2);
console.log(resposeshort(4))


// important
function myFunc() {
  let count=0
  return function inner() {
    if (count<1) {
      console.log("Called me");
      count++
    } else {
      console.log("Already has been called")
    }
  }
}

const fir = myFunc();
fir()
fir()