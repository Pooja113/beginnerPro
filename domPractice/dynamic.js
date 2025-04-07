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

const head = document.querySelector(".headline")
console.log(head.childNodes[1])
head.children[0].innerHTML = "<h2 id='main-heading'>Manage List</h2>" //it has performance issues

// ClassLIst
head.children[0].classList.add("check-class")
head.children[0].classList.toggle("check-class") //toggle the class if exists

const addListItem = document.createElement("li")
addListItem.textContent = "Todo 2"
const cloning= addListItem.cloneNode(true)
document.querySelector(".todos").append(addListItem)
document.querySelector(".todos").prepend(cloning)

console.log(addListItem)

console.log(addListItem.getBoundingClientRect())

// after and before can also be used as well as remove