const url = 'https://jsonplaceholder.typicode.com/posts/1'

async function getPosts() {
  const res = await fetch(url);
  if (res.ok) {
    return res.json()
  } else {
    throw new Error("something wrong");
  }
}


getPosts().then((data) => {
  console.log(data)
}).catch((err)=> console.log(err))