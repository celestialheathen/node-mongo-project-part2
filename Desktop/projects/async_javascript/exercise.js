fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => console.log(data.length))

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  console.log(data)
}

getPosts()
