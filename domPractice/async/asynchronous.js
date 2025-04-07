console.log("start")

const id =setTimeout(() => {
  console.log("here")
}, 1000);
console.log("end")
clearTimeout(id)



setInterval(() => {
  console.log(Math.floor(Math.random()*111))
}, 1000);



