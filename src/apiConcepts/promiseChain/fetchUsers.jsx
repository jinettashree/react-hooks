import { useState, useEffect } from "react";

function FetchUsers(){

    const[user, setUser]=useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            setUser(data);
        })
        .catch(error => {
            console.log("Error;",error);
        });
        
    }, []);
    return(
    <>
        <h3>Fetch Users data</h3>

        <ul>
        {user.map(user => (
            <li key={user.id}>
                Name: {user.name}<br/>
                Username: {user.username}<br/>
                Email: {user.email}
            </li>
        ))}
        </ul>
    </>
    )
}

export default FetchUsers