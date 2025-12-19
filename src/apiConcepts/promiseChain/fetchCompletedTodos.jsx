import { useState, useEffect } from "react";

function FetchCompletedTodos(){
    
    const[complete, setComplete]=useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/todos?completed=true")
        .then(response => response.json())
        .then(data =>{
            setComplete(data);
        })
        .catch(error => {
            console.log("Error:", error)
        });
    }, []);

    return(
    <>
    <h5>Completed Todos</h5>       

    <ul>
    {complete.map(complete => (
        <div key={complete.id}>
            Title:{complete.title}
        </div>
    ))}
    </ul>
    </>
    )
}

export default FetchCompletedTodos