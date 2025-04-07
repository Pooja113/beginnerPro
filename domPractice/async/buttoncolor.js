const btn = document.querySelector(".change-color")
function rgbcolor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`
}

const colorId=setInterval(() => {
  const rgb = rgbcolor ()
  document.body.style.backgroundColor= rgb
}, 1000);

btn.addEventListener("click", (e) => {
  clearInterval(colorId);
  e.target.textContent= document.body.style.backgroundColor
})

