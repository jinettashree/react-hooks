import {useState} from "react";

function LoadPosts(){

    const[posts, setPosts]=useState([]);
    const[show, setShow]=useState(false);

    const loadPostData = () => {
    if(!show){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            setPosts(data);
            setShow(true);
        })
        .catch(error =>{
            console.log("Error:", error)
        });
        } else{
            setShow(false)
        }
    };

    return(
    <>
    <h5>Load Post Data</h5>

        <button onClick={loadPostData}>
            {show ? "Hide Posts" : "Load Posts"}
        </button>

    {show && (

    <ul>
    {posts.map(post => (
        <li key={post.id}>
            Title: {post.title}<br/>
            Body: {post.body}
        </li>
    ))}
    </ul>

    )}
    </>
    )
}

export default LoadPosts