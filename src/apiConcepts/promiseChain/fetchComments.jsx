import { useState, useEffect } from "react";

function FetchComments(){

    const[comments, setComments]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments?_limit=5")
        .then(response => response.json())
        .then(data => {
            setComments(data);
        })
        .catch(error => {
            console.log("Error:", error);
        });
    }, []);
    return(
    <>
        <h5>Fetch Comments</h5>

        {comments.map(comment => (
            <li key={comment.id}>
                Name: {comment.name}<br/>
                Email: {comment.email}<br/>
                Body: {comment.body}
            </li>
        ))}
    </>
    )
}

export default FetchComments