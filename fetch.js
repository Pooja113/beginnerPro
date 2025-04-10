const url = 'https://jsonplaceholder.typicode.com/posts'

fetch(url)
  .then((res) => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error("something went wrong");
    }
  }).then(data => {
    console.log(data)
  })
.catch((err)=> console.log(err))