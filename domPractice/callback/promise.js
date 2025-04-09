function testProFun() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve("Resolved")
      } else {
        reject("rejected")
      }
    }, 2000);
  })
}

testProFun().then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
  
})


Promise.resolve(9).then((val) => console.log(val))
//then in Promise always return promise


const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");


function changeColor(element, text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        resolve()
      } else {
        reject("rejected")
      }
    }, time);
  })

}

// promise chaining 
changeColor(heading1, "New Heading 1", 1000)
  .then(() =>  changeColor(heading2, "New Heading 2", 1000))
  .then(() => changeColor(heading3, "New Heading 3", 1000))
  .then(() =>  changeColor(heading4, "New Heading 4", 1000))
  .then(() => changeColor(heading5, "New Heading 5", 1000))
  .catch((rej)=> console.log(rej))