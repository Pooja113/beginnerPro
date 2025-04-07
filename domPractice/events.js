
const btns = document.querySelectorAll(".buttons button")
console.log(btns)
  // btn.onclick = function(){
  //   console.log("clicked")
  // }

for (const element of btns) {
  element.addEventListener('click', (e) => {
    const text = e.target.textContent
    e.target.style.backgroundColor = "yellow"
    console.log(text)
  })
}

const randomeColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`
}
const themeButton = document.querySelector("#theme-change");
themeButton.addEventListener("click", (e) => {
  const currentColor = document.getElementsByClassName("current-color")
  const rgb = randomeColor()
  currentColor[0].textContent = rgb
  document.body.style.backgroundColor = rgb
})

document.addEventListener("keypress", (e) => {
  console.log(e.key)
})

themeButton.addEventListener("mouseover", (e) => {
  console.log("This button changes the body color")
})

themeButton.addEventListener("mouseleave", (e) => {
  console.log("Oops ypu are not going away from the button")
})

// Bubbling: Event starts at the target and goes up the DOM.

//Capturing: Event starts at the root and goes down to the target.

//Delegation: A single event listener on a parent handles events from multiple children using bubbling.

