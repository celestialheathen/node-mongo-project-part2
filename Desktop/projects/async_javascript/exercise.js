// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json())
// .then(data => console.log(data.length))

// Get
// async function getPosts() {
//   const res = await fetch(`http://localhost:3000/tasks`)
//   const data = await res.json()
//   console.log(data)
// }
// getPosts()

// Delete
// async function deletePost(id) {
//   const res = await fetch(`http://localhost:3000/tasks/${id}`, {method: "DELETE"})
// }
// deletePost(2)

// POST
// async function addPost(newTask) {
//   const res = await fetch(`http://localhost:3000/tasks`, {
//     method: "POST", 
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(newTask)
//   })
//   // const data = await res.json()
//   // console.log(data)
// }
// addPost({ id: 2,
//           text: "Dating in the summer",
//           day: "Summer....",
//           reminder: true})

// PATCH
// async function updatePost(id, info) {
//     const res = await fetch(`http://localhost:3000/tasks/${id}`, {
//     method: "PATCH", 
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(info)
//   })
//   const data = await res.json()
//   console.log(data)
// }

// updatePost(2, {day: "This scorching summer in NYC..."})