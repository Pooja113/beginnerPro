const mainHeading = document.getElementById("main-heading")
console.log(mainHeading)
let nav = document.getElementsByClassName("nav-item")
// HtML Collection
for (let i = 0; i < nav.length; i++) {
  console.log(nav[i])
}
console.log(Array.isArray(nav))
nav= Array.from(nav) // convert html collection to array
console.log(Array.isArray(nav))

const first=document.querySelector(".nav-item")
console.log(first.innerText)
first.textContent = "Home Page"

const logo = document.getElementsByClassName("logo")
logo[0].innerText = "Practice JS"
logo[0].style.color="#101010"


const a = document.getElementsByTagName("a");
const input = document.querySelector("input");

 const attr = input.getAttribute("type") //we can change it by using setAttribute
console.log(attr)

const all=document.querySelectorAll(".nav-item")
console.log(all) // Nodelist

const head = document.querySelector("div")
console.log(head.childNodes[1])
head.childNodes[1].innerHTML = "<h2 id='main-heading'>Manage List</h2>"

