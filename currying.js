const add = function(num1) {
  return function(num2) {
    return num1 + num2
  }
}

const addition = add(10);
console.log(addition(2))