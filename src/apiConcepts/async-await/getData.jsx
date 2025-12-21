import { useEffect, useState } from "react";

function GetData(){

  const[posts, setPosts]=useState([]);

useEffect(() => {
  async function getPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const post = await response.json();
    setPosts(post)
  }

  getPost();
}, []);

return(
  <div>
  <h1>Post Data</h1>

  {posts.map(post =>(
    <li key={post.id}>
      Title: {post.title}<br/>
      Body: {post.body}
    </li>
  ))}

  </div>
)
}
export default GetData