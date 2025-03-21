const fetchData = async function() {
  try {
    const fetched = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await fetched.json()
    console.log(data)
  } catch (error) {
    console.log(`Error: ${error}`) 
  }

}
fetchData()