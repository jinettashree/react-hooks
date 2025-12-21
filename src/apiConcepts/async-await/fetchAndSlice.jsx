import { useState, useEffect } from "react";

function FetchAndSlice(){

    const[posts, setPosts]=useState([]);

    useEffect(() => {
        async function getSlicedPost (){
            const response =await fetch("https://jsonplaceholder.typicode.com/posts");
            const posts = await response.json();

            const slicedPost = posts.slice(0,5);
            setPosts(slicedPost)
        }

        getSlicedPost();
    }, []);
return(
    <>
        <h1>Fetch and Sliced </h1>

        {posts.map(post => (
            <li key={post.id}>
                Title: {post.title}<br/>
                Body: {post.body}
            </li>
        ))}
    </>
)
}

export default FetchAndSlice