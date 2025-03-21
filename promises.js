
const data = {
  name: "Pooja"
};

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => { 
      const err = Math.random() < 0.5;
      if(err) {
        reject("There is an issue")
      } else {
        resolve(data)
      }
    },1000)
  })
}

fetchData().then((data) => {
  console.log(`Data: ${JSON.stringify(data)}`)
}).catch((err) => {
  console.log(`Error: ${err}`)
})

