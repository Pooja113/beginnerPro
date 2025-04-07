const todoForm = document.querySelector(".form-todo");
const todoInput = todoForm.querySelector(`input[type='text']`);
const todosList= document.querySelector(".todos")
console.log(todosList)


todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoInputVal = todoInput.value;
  const createLi = document.createElement("li");
  createLi.innerHTML= `<span>${todoInputVal}</span>  
        <div>
          <button class="todo-btn done">Done</button>
          <button class="todo-btn remove">Remove</button>
        </div>`
  todosList.append(createLi)
  todoInput.value = "";
})

//event delegation
todosList.addEventListener("click", (e) => {
  if(e.target.classList.contains("done")) {
    const prevSib = e.target.parentNode.previousElementSibling;
    prevSib.style.textDecoration="line-through"
  }

  if(e.target.classList.contains("remove")) {
    const parentLi = e.target.parentNode.parentNode;
    parentLi.remove();
  }
})