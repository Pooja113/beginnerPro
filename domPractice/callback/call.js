const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");


//callback hell
// setTimeout(() => {
//   heading1.textContent = "New Heading 1"
//   setTimeout(() => {
//     heading2.textContent = "New Heading 2"
//     setTimeout(() => {
//       heading3.textContent="New Heading 3"
//     }, 2000);
//   }, 2000);
// }, 1000);

function changeColor(element,text, time, onSuccess, onFailure){
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      if (onSuccess) {
        onSuccess()
      }
    } else {
      if (onFailure) {
        onFailure()
      }
    }
  }, time);
}

// pyramid of doom 
changeColor(heading1, "New Heading 1", 1000, () => {
  changeColor(heading2, "New Heading 2", 1000, () => {
    changeColor(heading3, "New Heading 3", 1000,  () => {
      changeColor(heading4, "New Heading 4", 1000)
    }, () => {console.log("Element is not present")})
  }, () => {console.log("Element is not present")})
}, () => {console.log("Element is not present")})